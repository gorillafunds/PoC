import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const OwnableAbi = [
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
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
] as AbiItem[];
