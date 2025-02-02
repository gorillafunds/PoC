import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const KyberReserveInterfaceAbi = [
  {
    constant: false,
    inputs: [
      { name: 'srcToken', type: 'address' },
      { name: 'srcAmount', type: 'uint256' },
      { name: 'destToken', type: 'address' },
      { name: 'destAddress', type: 'address' },
      { name: 'conversionRate', type: 'uint256' },
      { name: 'validate', type: 'bool' },
    ],
    name: 'trade',
    outputs: [{ name: '', type: 'bool' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: 'src', type: 'address' },
      { name: 'dest', type: 'address' },
      { name: 'srcQty', type: 'uint256' },
      { name: 'blockNumber', type: 'uint256' },
    ],
    name: 'getConversionRate',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as AbiItem[];
