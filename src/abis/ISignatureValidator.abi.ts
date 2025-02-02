import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const ISignatureValidatorAbi = [
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
] as AbiItem[];
