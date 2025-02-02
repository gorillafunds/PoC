import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MixinAssetProxyDispatcherAbi = [
  {
    constant: true,
    inputs: [{ name: '', type: 'bytes4' }],
    name: 'assetProxies',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'assetProxyId', type: 'bytes4' }],
    name: 'getAssetProxy',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'assetProxy', type: 'address' }],
    name: 'registerAssetProxy',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'id', type: 'bytes4' },
      { indexed: false, name: 'assetProxy', type: 'address' },
    ],
    name: 'AssetProxyRegistered',
    type: 'event',
  },
] as AbiItem[];
