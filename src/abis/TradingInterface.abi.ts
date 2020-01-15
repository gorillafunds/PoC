import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const TradingInterfaceAbi = [
  {
    constant: false,
    inputs: [
      { name: 'ofExchange', type: 'address' },
      { name: 'ofSellAsset', type: 'address' },
      { name: 'ofBuyAsset', type: 'address' },
      { name: 'orderId', type: 'uint256' },
      { name: 'expiryTime', type: 'uint256' },
    ],
    name: 'addOpenMakeOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'exchangeIndex', type: 'uint256' },
      { name: 'methodSignature', type: 'string' },
      { name: 'orderAddresses', type: 'address[6]' },
      { name: 'orderValues', type: 'uint256[8]' },
      { name: 'identifier', type: 'bytes32' },
      { name: 'makerAssetData', type: 'bytes' },
      { name: 'takerAssetData', type: 'bytes' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'callOnExchange',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'ofExchange', type: 'address' },
      { name: 'ofSellAsset', type: 'address' },
    ],
    name: 'removeOpenMakeOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'exchangeAddress', type: 'address' },
      { indexed: true, name: 'methodSignature', type: 'string' },
      { indexed: false, name: 'orderAddresses', type: 'address[6]' },
      { indexed: false, name: 'orderValues', type: 'uint256[8]' },
      { indexed: false, name: 'identifier', type: 'bytes32' },
      { indexed: false, name: 'makerAssetData', type: 'bytes' },
      { indexed: false, name: 'takerAssetData', type: 'bytes' },
      { indexed: false, name: 'signature', type: 'bytes' },
    ],
    name: 'ExchangeMethodCall',
    type: 'event',
  },
] as AbiItem[];
