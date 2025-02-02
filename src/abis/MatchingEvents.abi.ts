import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MatchingEventsAbi = [
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'isEnabled', type: 'bool' }],
    name: 'LogBuyEnabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'pay_gem', type: 'address' },
      { indexed: false, name: 'min_amount', type: 'uint256' },
    ],
    name: 'LogMinSell',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'isEnabled', type: 'bool' }],
    name: 'LogMatchingEnabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'id', type: 'uint256' }],
    name: 'LogUnsortedOffer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'id', type: 'uint256' }],
    name: 'LogSortedOffer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'baseToken', type: 'address' },
      { indexed: false, name: 'quoteToken', type: 'address' },
    ],
    name: 'LogAddTokenPairWhitelist',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'baseToken', type: 'address' },
      { indexed: false, name: 'quoteToken', type: 'address' },
    ],
    name: 'LogRemTokenPairWhitelist',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'keeper', type: 'address' },
      { indexed: false, name: 'id', type: 'uint256' },
    ],
    name: 'LogInsert',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'keeper', type: 'address' },
      { indexed: false, name: 'id', type: 'uint256' },
    ],
    name: 'LogDelete',
    type: 'event',
  },
] as AbiItem[];
