import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const IValidatorAbi = [
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