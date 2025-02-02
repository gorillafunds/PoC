import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const DSGroupFactoryAbi = [
  {
    constant: false,
    inputs: [
      { name: 'members', type: 'address[]' },
      { name: 'quorum', type: 'uint256' },
      { name: 'window', type: 'uint256' },
    ],
    name: 'newGroup',
    outputs: [{ name: 'group', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'isGroup',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: true,
    inputs: [
      { indexed: true, name: 'sig', type: 'bytes4' },
      { indexed: true, name: 'guy', type: 'address' },
      { indexed: true, name: 'foo', type: 'bytes32' },
      { indexed: true, name: 'bar', type: 'bytes32' },
      { indexed: false, name: 'wad', type: 'uint256' },
      { indexed: false, name: 'fax', type: 'bytes' },
    ],
    name: 'LogNote',
    type: 'event',
  },
] as AbiItem[];
