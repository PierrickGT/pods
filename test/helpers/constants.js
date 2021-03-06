const Web3 = require('web3')
const BN = require('bn.js')

const MAX_NEW_FIXED = '57896044618658097711785492504343953926634992332820282'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
const ERC_1820_SINGLE_USE_ADDRESS = '0xa990077c3205cbDf861e17Fa532eeB069cE9fF96'
const ERC_1820_REGISTRY_ADDRESS = '0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24'
const SCD_MCD_MIGRATION_ADDRESS = '0xc73e0383F3Aff3215E6f04B0331D58CeCf0Ab849'
const TOKENS_SENDER_INTERFACE_HASH = '0x29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe895'
const TOKENS_RECIPIENT_INTERFACE_HASH = '0xb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b'
const SALT = '0x1234123412341234123412341234123412341234123412341234123412341236'
const SECRET = '0x1234123412341234123412341234123412341234123412341234123412341234'
const SECRET_HASH = new Web3().utils.soliditySha3(SECRET, SALT)
const TICKET_PRICE = new BN(new Web3().utils.toWei('10', 'ether'))
const SUPPLY_RATE_PER_BLOCK = '100000000000000000' // 0.1 per block
const ERC_20_INTERFACE_HASH = new Web3().utils.soliditySha3("ERC20Token")
const ERC_777_INTERFACE_HASH = new Web3().utils.soliditySha3("ERC777Token")
const SAI_POOL_ADDRESS = '0xb7896fce748396EcFC240F5a0d3Cc92ca42D7d84'
const BASE_EXCHANGE_RATE_MANTISSA = '1000000000000000000000000'

module.exports = {
  MAX_NEW_FIXED,
  BASE_EXCHANGE_RATE_MANTISSA,
  ZERO_ADDRESS,
  ERC_1820_SINGLE_USE_ADDRESS,
  ERC_1820_REGISTRY_ADDRESS,
  SCD_MCD_MIGRATION_ADDRESS,
  ERC_20_INTERFACE_HASH,
  ERC_777_INTERFACE_HASH,
  TOKENS_SENDER_INTERFACE_HASH,
  TOKENS_RECIPIENT_INTERFACE_HASH,
  SALT,
  SECRET,
  SECRET_HASH,
  TICKET_PRICE,
  SUPPLY_RATE_PER_BLOCK,
  SAI_POOL_ADDRESS
}
