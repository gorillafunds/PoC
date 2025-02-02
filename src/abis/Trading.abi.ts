import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const TradingAbi = [
  {
    constant: false,
    inputs: [{ name: '_asset', type: 'address' }],
    name: 'updateAndGetQuantityBeingTraded',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'owner_', type: 'address' }],
    name: 'setOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'initialized',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'adapterIsAdded',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'ofExchange', type: 'address' },
      { name: 'orderId', type: 'bytes32' },
      { name: 'updateType', type: 'uint8' },
      { name: 'orderAddresses', type: 'address[2]' },
      { name: 'orderValues', type: 'uint256[3]' },
    ],
    name: 'orderUpdateHook',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_token', type: 'address' }],
    name: 'returnAssetToVault',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: 'exchange', type: 'address' },
      { name: 'asset', type: 'address' },
    ],
    name: 'isOrderExpired',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'priceSource',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_tokens', type: 'address[]' }],
    name: 'returnBatchToVault',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'exchanges',
    outputs: [
      { name: 'exchange', type: 'address' },
      { name: 'adapter', type: 'address' },
      { name: 'takesCustody', type: 'bool' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'openMakeOrdersAgainstAsset',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: 'ofExchange', type: 'address' },
      { name: 'ofAsset', type: 'address' },
    ],
    name: 'getOpenOrderInfo',
    outputs: [
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'hub',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MAKE_ORDER_COOLDOWN',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'ofAsset', type: 'address' }],
    name: 'updateAndGetQuantityHeldInExchange',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'ofExchange', type: 'address' },
      { name: 'sellAsset', type: 'address' },
      { name: 'buyAsset', type: 'address' },
      { name: 'orderId', type: 'uint256' },
      { name: 'expirationTime', type: 'uint256' },
    ],
    name: 'addOpenMakeOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'version',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'orderId', type: 'bytes32' }],
    name: 'getZeroExOrderDetails',
    outputs: [
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
        name: '',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'isInOpenMakeOrder',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'authority_', type: 'address' }],
    name: 'setAuthority',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'registry',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_spokes', type: 'address[12]' }],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'mlnToken',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getExchangeInfo',
    outputs: [
      { name: '', type: 'address[]' },
      { name: '', type: 'address[]' },
      { name: '', type: 'bool[]' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'exchangesToOpenMakeOrders',
    outputs: [
      { name: 'id', type: 'uint256' },
      { name: 'expiresAt', type: 'uint256' },
      { name: 'orderIndex', type: 'uint256' },
      { name: 'buyAsset', type: 'address' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'orders',
    outputs: [
      { name: 'exchangeAddress', type: 'address' },
      { name: 'orderId', type: 'bytes32' },
      { name: 'updateType', type: 'uint8' },
      { name: 'makerAsset', type: 'address' },
      { name: 'takerAsset', type: 'address' },
      { name: 'makerQuantity', type: 'uint256' },
      { name: 'takerQuantity', type: 'uint256' },
      { name: 'timestamp', type: 'uint256' },
      { name: 'fillTakerQuantity', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ORDER_LIFESPAN',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'routes',
    outputs: [
      { name: 'accounting', type: 'address' },
      { name: 'feeManager', type: 'address' },
      { name: 'participation', type: 'address' },
      { name: 'policyManager', type: 'address' },
      { name: 'shares', type: 'address' },
      { name: 'trading', type: 'address' },
      { name: 'vault', type: 'address' },
      { name: 'priceSource', type: 'address' },
      { name: 'registry', type: 'address' },
      { name: 'version', type: 'address' },
      { name: 'engine', type: 'address' },
      { name: 'mlnToken', type: 'address' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'authority',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'orderId', type: 'bytes32' },
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
        name: 'zeroExOrderData',
        type: 'tuple',
      },
    ],
    name: 'addZeroExOrderData',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'engine',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'makerAssetCooldown',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'bytes32' }],
    name: 'orderIdToZeroExOrder',
    outputs: [
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
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'exchangeIndex', type: 'uint256' },
      { name: 'methodSignature', type: 'string' },
      { name: 'orderAddresses', type: 'address[6]' },
      { name: 'orderValues', type: 'uint256[8]' },
      { name: 'identifier', type: 'bytes32' },
      { name: 'makerAssetData', type: 'bytes' },
      { name: 'takerAssetData', type: 'bytes' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'callOnExchange',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'orderIndex', type: 'uint256' }],
    name: 'getOrderDetails',
    outputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'exchange', type: 'address' },
      { name: 'sellAsset', type: 'address' },
    ],
    name: 'removeOpenMakeOrder',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: '_hub', type: 'address' },
      { name: '_exchanges', type: 'address[]' },
      { name: '_adapters', type: 'address[]' },
      { name: '_registry', type: 'address' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'exchangeAddress', type: 'address' },
      { indexed: true, name: 'methodSignature', type: 'string' },
      { indexed: false, name: 'orderAddresses', type: 'address[6]' },
      { indexed: false, name: 'orderValues', type: 'uint256[8]' },
      { indexed: false, name: 'identifier', type: 'bytes32' },
      { indexed: false, name: 'makerAssetData', type: 'bytes' },
      { indexed: false, name: 'takerAssetData', type: 'bytes' },
      { indexed: false, name: 'signature', type: 'bytes' },
    ],
    name: 'ExchangeMethodCall',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'authority', type: 'address' }],
    name: 'LogSetAuthority',
    type: 'event',
  },
  { anonymous: false, inputs: [{ indexed: true, name: 'owner', type: 'address' }], name: 'LogSetOwner', type: 'event' },
] as AbiItem[];
