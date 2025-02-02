import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const DSGuardFactoryAbi = [
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'isGuard',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'newGuard',
    outputs: [{ name: 'guard', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
