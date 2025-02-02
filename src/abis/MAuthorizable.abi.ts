import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MAuthorizableAbi = [
  {
    constant: false,
    inputs: [{ name: 'target', type: 'address' }],
    name: 'addAuthorizedAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'target', type: 'address' }],
    name: 'removeAuthorizedAddress',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'target', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'removeAuthorizedAddressAtIndex',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getAuthorizedAddresses',
    outputs: [{ name: '', type: 'address[]' }],
    payable: false,
    stateMutability: 'view',
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
      { indexed: true, name: 'target', type: 'address' },
      { indexed: true, name: 'caller', type: 'address' },
    ],
    name: 'AuthorizedAddressAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'target', type: 'address' },
      { indexed: true, name: 'caller', type: 'address' },
    ],
    name: 'AuthorizedAddressRemoved',
    type: 'event',
  },
] as AbiItem[];
