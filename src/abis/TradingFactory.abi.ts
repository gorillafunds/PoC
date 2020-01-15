import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const TradingFactoryAbi = [
  {
    constant: false,
    inputs: [
      { name: '_hub', type: 'address' },
      { name: '_exchanges', type: 'address[]' },
      { name: '_adapters', type: 'address[]' },
      { name: '_registry', type: 'address' },
    ],
    name: 'createInstance',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
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
    anonymous: false,
    inputs: [
      { indexed: true, name: 'hub', type: 'address' },
      { indexed: true, name: 'instance', type: 'address' },
      { indexed: false, name: 'exchanges', type: 'address[]' },
      { indexed: false, name: 'adapters', type: 'address[]' },
      { indexed: false, name: 'registry', type: 'address' },
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
