import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const EventfulMarketAbi = [
  { anonymous: false, inputs: [{ indexed: false, name: 'id', type: 'uint256' }], name: 'LogItemUpdate', type: 'event' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'pay_amt', type: 'uint256' },
      { indexed: true, name: 'pay_gem', type: 'address' },
      { indexed: false, name: 'buy_amt', type: 'uint256' },
      { indexed: true, name: 'buy_gem', type: 'address' },
    ],
    name: 'LogTrade',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'id', type: 'bytes32' },
      { indexed: true, name: 'pair', type: 'bytes32' },
      { indexed: true, name: 'maker', type: 'address' },
      { indexed: false, name: 'pay_gem', type: 'address' },
      { indexed: false, name: 'buy_gem', type: 'address' },
      { indexed: false, name: 'pay_amt', type: 'uint128' },
      { indexed: false, name: 'buy_amt', type: 'uint128' },
      { indexed: false, name: 'timestamp', type: 'uint64' },
    ],
    name: 'LogMake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'id', type: 'bytes32' },
      { indexed: true, name: 'pair', type: 'bytes32' },
      { indexed: true, name: 'maker', type: 'address' },
      { indexed: false, name: 'pay_gem', type: 'address' },
      { indexed: false, name: 'buy_gem', type: 'address' },
      { indexed: false, name: 'pay_amt', type: 'uint128' },
      { indexed: false, name: 'buy_amt', type: 'uint128' },
      { indexed: false, name: 'timestamp', type: 'uint64' },
    ],
    name: 'LogBump',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'id', type: 'bytes32' },
      { indexed: true, name: 'pair', type: 'bytes32' },
      { indexed: true, name: 'maker', type: 'address' },
      { indexed: false, name: 'pay_gem', type: 'address' },
      { indexed: false, name: 'buy_gem', type: 'address' },
      { indexed: true, name: 'taker', type: 'address' },
      { indexed: false, name: 'take_amt', type: 'uint128' },
      { indexed: false, name: 'give_amt', type: 'uint128' },
      { indexed: false, name: 'timestamp', type: 'uint64' },
    ],
    name: 'LogTake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'id', type: 'bytes32' },
      { indexed: true, name: 'pair', type: 'bytes32' },
      { indexed: true, name: 'maker', type: 'address' },
      { indexed: false, name: 'pay_gem', type: 'address' },
      { indexed: false, name: 'buy_gem', type: 'address' },
      { indexed: false, name: 'pay_amt', type: 'uint128' },
      { indexed: false, name: 'buy_amt', type: 'uint128' },
      { indexed: false, name: 'timestamp', type: 'uint64' },
    ],
    name: 'LogKill',
    type: 'event',
  },
] as AbiItem[];
