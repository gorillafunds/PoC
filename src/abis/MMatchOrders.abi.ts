import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const MMatchOrdersAbi = [
  {
    constant: false,
    inputs: [
      {
        components: [
          { name: 'makerAddress', type: 'address' },
          { name: 'takerAddress', type: 'address' },
          { name: 'feeRecipientAddress', type: 'address' },
          { name: 'senderAddress', type: 'address' },
          { name: 'makerAssetAmount', type: 'uint256' },
          { name: 'takerAssetAmount', type: 'uint256' },
          { name: 'makerFee', type: 'uint256' },
          { name: 'takerFee', type: 'uint256' },
          { name: 'expirationTimeSeconds', type: 'uint256' },
          { name: 'salt', type: 'uint256' },
          { name: 'makerAssetData', type: 'bytes' },
          { name: 'takerAssetData', type: 'bytes' },
        ],
        name: 'leftOrder',
        type: 'tuple',
      },
      {
        components: [
          { name: 'makerAddress', type: 'address' },
          { name: 'takerAddress', type: 'address' },
          { name: 'feeRecipientAddress', type: 'address' },
          { name: 'senderAddress', type: 'address' },
          { name: 'makerAssetAmount', type: 'uint256' },
          { name: 'takerAssetAmount', type: 'uint256' },
          { name: 'makerFee', type: 'uint256' },
          { name: 'takerFee', type: 'uint256' },
          { name: 'expirationTimeSeconds', type: 'uint256' },
          { name: 'salt', type: 'uint256' },
          { name: 'makerAssetData', type: 'bytes' },
          { name: 'takerAssetData', type: 'bytes' },
        ],
        name: 'rightOrder',
        type: 'tuple',
      },
      { name: 'leftSignature', type: 'bytes' },
      { name: 'rightSignature', type: 'bytes' },
    ],
    name: 'matchOrders',
    outputs: [
      {
        components: [
          {
            components: [
              { name: 'makerAssetFilledAmount', type: 'uint256' },
              { name: 'takerAssetFilledAmount', type: 'uint256' },
              { name: 'makerFeePaid', type: 'uint256' },
              { name: 'takerFeePaid', type: 'uint256' },
            ],
            name: 'left',
            type: 'tuple',
          },
          {
            components: [
              { name: 'makerAssetFilledAmount', type: 'uint256' },
              { name: 'takerAssetFilledAmount', type: 'uint256' },
              { name: 'makerFeePaid', type: 'uint256' },
              { name: 'takerFeePaid', type: 'uint256' },
            ],
            name: 'right',
            type: 'tuple',
          },
          { name: 'leftMakerAssetSpreadAmount', type: 'uint256' },
        ],
        name: 'matchedFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as AbiItem[];
