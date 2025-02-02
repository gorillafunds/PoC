import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const SimpleNetworkInterfaceAbi = [
  {
    constant: false,
    inputs: [
      { name: 'token', type: 'address' },
      { name: 'srcAmount', type: 'uint256' },
      { name: 'minConversionRate', type: 'uint256' },
    ],
    name: 'swapTokenToEther',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'src', type: 'address' },
      { name: 'srcAmount', type: 'uint256' },
      { name: 'dest', type: 'address' },
      { name: 'minConversionRate', type: 'uint256' },
    ],
    name: 'swapTokenToToken',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'token', type: 'address' },
      { name: 'minConversionRate', type: 'uint256' },
    ],
    name: 'swapEtherToToken',
    outputs: [{ name: '', type: 'uint256' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
] as AbiItem[];
