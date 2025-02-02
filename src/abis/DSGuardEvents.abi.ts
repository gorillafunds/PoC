import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const DSGuardEventsAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'bytes32' },
      { indexed: true, name: 'dst', type: 'bytes32' },
      { indexed: true, name: 'sig', type: 'bytes32' },
    ],
    name: 'LogPermit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'bytes32' },
      { indexed: true, name: 'dst', type: 'bytes32' },
      { indexed: true, name: 'sig', type: 'bytes32' },
    ],
    name: 'LogForbid',
    type: 'event',
  },
] as AbiItem[];
