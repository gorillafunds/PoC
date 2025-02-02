import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const WrapperRegistryEFXAbi = [
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'wrapper2TokenLookup',
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
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'token2WrapperLookup',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'originalTokens', type: 'address[]' },
      { name: 'wrapperTokens', type: 'address[]' },
    ],
    name: 'addNewWrapperPair',
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
      { indexed: false, name: 'token', type: 'address' },
      { indexed: false, name: 'wrapper', type: 'address' },
    ],
    name: 'AddNewPair',
    type: 'event',
  },
] as AbiItem[];
