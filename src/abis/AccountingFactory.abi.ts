import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const AccountingFactoryAbi = [
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'childExists',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_child', type: 'address' }],
    name: 'isInstance',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_hub', type: 'address' },
      { name: '_denominationAsset', type: 'address' },
      { name: '_nativeAsset', type: 'address' },
      { name: '_defaultAssets', type: 'address[]' },
    ],
    name: 'createInstance',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'hub', type: 'address' },
      { indexed: true, name: 'instance', type: 'address' },
      { indexed: false, name: 'denominationAsset', type: 'address' },
      { indexed: false, name: 'nativeAsset', type: 'address' },
      { indexed: false, name: 'defaultAssets', type: 'address[]' },
    ],
    name: 'NewInstance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'hub', type: 'address' },
      { indexed: true, name: 'instance', type: 'address' },
    ],
    name: 'NewInstance',
    type: 'event',
  },
] as AbiItem[];
