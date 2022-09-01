import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  RINKEBY = 4,
  BSCNET = 56,
  BSCTESTNET = 97,
  FANTOMNET = 250,
  FANTOMTESTNET = 4002,
  HARMONYNET = 1666600000,
  HARMONYTESTNET = 1666700000,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  1: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  4: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  56: '0x69a3D7D0505988Bb9774Ba5696299a6375066612',
  97: '0x69a3D7D0505988Bb9774Ba5696299a6375066612',
  250: '0xEF45d134b73241eDa7703fa787148D9C9F4950b0',
  4002: '0xEF45d134b73241eDa7703fa787148D9C9F4950b0',
  1666600000: '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196',
  1666700000: '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196',
}

export const INIT_CODE_HASH = {
  1: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  4: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  56: '0xf9178be16056095488ae41147cbd9138809f3234f0ecf62b1a449e1a9f89b1da',
  97: '0xf9178be16056095488ae41147cbd9138809f3234f0ecf62b1a449e1a9f89b1da',
  250: '0xe242e798f6cee26a9cb0bbf24653bf066e5356ffeac160907fe2cc108e238617',
  4002: '0xe242e798f6cee26a9cb0bbf24653bf066e5356ffeac160907fe2cc108e238617',
  1666600000: '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
  1666700000: '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
