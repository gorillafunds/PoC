import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const ZeroExV2AdapterAbi = [
  {
    constant: false,
    inputs: [
      { name: 'targetExchange', type: 'address' },
      { name: 'orderAddresses', type: 'address[6]' },
      { name: 'orderValues', type: 'uint256[8]' },
      { name: 'identifier', type: 'bytes32' },
      { name: 'makerAssetData', type: 'bytes' },
      { name: 'takerAssetData', type: 'bytes' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'cancelOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'targetExchange', type: 'address' },
      { name: 'orderAddresses', type: 'address[6]' },
      { name: 'orderValues', type: 'uint256[8]' },
      { name: 'identifier', type: 'bytes32' },
      { name: 'makerAssetData', type: 'bytes' },
      { name: 'takerAssetData', type: 'bytes' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'makeOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: 'targetExchange', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'makerAsset', type: 'address' },
    ],
    name: 'getOrder',
    outputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'targetExchange', type: 'address' },
      { name: 'orderAddresses', type: 'address[6]' },
      { name: 'orderValues', type: 'uint256[8]' },
      { name: 'identifier', type: 'bytes32' },
      { name: 'makerAssetData', type: 'bytes' },
      { name: 'takerAssetData', type: 'bytes' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'takeOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
