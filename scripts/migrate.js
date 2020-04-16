#!/usr/bin/env node
const { Project } = require('@pooltogether/oz-migrate')
const chalk = require('chalk')
const { runShell } = require('./runShell')

async function migrate(context, ozNetworkName, ozOptions = '') {
  console.log(chalk.yellow('Starting migration...'))

  const project = new Project('.oz-migrate')
  const migration = await project.migrationForNetwork(ozNetworkName)

  let poolDai, poolUsdc
  if (ozNetworkName === 'mainnet' || ozNetworkName === 'mainnet_fork') {
    poolDai = '0x6C5492664df0ED36f29D654Fd62e9C3A3F6279A3'
    poolUsdc = '0x3fe4bf988948888F52a548d179140F6Aee01ABaA'
  } else if (ozNetworkName === 'kovan') { //assume mainnet
    poolDai = '0xC3a62C8Af55c59642071bC171Ebd05Eb2479B663'
    poolUsdc = '0xb073a5a16025c91ae3e9764E5cc5fC4DD2fA99Bc'
  } else {
    throw new Error(`Unknown network: ${ozNetworkName}`)
  }

  runShell(`oz session ${ozOptions} --network ${ozNetworkName} --from ${process.env.ADMIN_ADDRESS} --expires 3600 --timeout 600`)

  await migration.migrate(10, async () => {
    console.log(chalk.green('Starting DaiPod deployment...'))
    runShell(`oz create DaiPod --init initialize --args ${poolDai}`)
    context.reload()
  })

  await migration.migrate(20, async () => {
    console.log(chalk.green('Starting UsdcPod deployment...'))
    runShell(`oz create UsdcPod --init initialize --args ${poolUsdc}`)
    context.reload()
  })

  console.log(chalk.green('Done!'))
}

module.exports = {
  migrate
}
