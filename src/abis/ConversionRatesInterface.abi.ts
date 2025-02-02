import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const ConversionRatesInterfaceAbi = [
  {
    constant: true,
    inputs: [
      { name: 'token', type: 'address' },
      { name: 'currentBlockNumber', type: 'uint256' },
      { name: 'buy', type: 'bool' },
      { name: 'qty', type: 'uint256' },
    ],
    name: 'getRate',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'token', type: 'address' },
      { name: 'buyAmount', type: 'int256' },
      { name: 'rateUpdateBlock', type: 'uint256' },
      { name: 'currentBlock', type: 'uint256' },
    ],
    name: 'recordImbalance',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
