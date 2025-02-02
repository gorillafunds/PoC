import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MixinTransactionsAbi = [
  {
    constant: false,
    inputs: [
      { name: 'hash', type: 'bytes32' },
      { name: 'signerAddress', type: 'address' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'preSign',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'bytes32' }],
    name: 'transactions',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'validatorAddress', type: 'address' },
      { name: 'approval', type: 'bool' },
    ],
    name: 'setSignatureValidatorApproval',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: 'hash', type: 'bytes32' },
      { name: 'signerAddress', type: 'address' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'isValid', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'salt', type: 'uint256' },
      { name: 'signerAddress', type: 'address' },
      { name: 'data', type: 'bytes' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'executeTransaction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'EIP712_DOMAIN_HASH',
    outputs: [{ name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'currentContextAddress',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'signerAddress', type: 'address' },
      { indexed: true, name: 'validatorAddress', type: 'address' },
      { indexed: false, name: 'approved', type: 'bool' },
    ],
    name: 'SignatureValidatorApproval',
    type: 'event',
  },
] as AbiItem[];
