import { AbiItem } from 'web3-utils';

// tslint:disable-next-line:variable-name
export const RegistryAbi = [
  {
    constant: false,
    inputs: [{ name: '_weiAmount', type: 'uint256' }],
    name: 'setIncentive',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_fund', type: 'address' },
      { name: '_owner', type: 'address' },
      { name: '_name', type: 'string' },
    ],
    name: 'registerFund',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_engine', type: 'address' }],
    name: 'setEngine',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MAX_REGISTERED_ENTITIES',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
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
    constant: false,
    inputs: [
      { name: '_version', type: 'address' },
      { name: '_name', type: 'bytes32' },
    ],
    name: 'registerVersion',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'incentive',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_user', type: 'address' },
      { name: '_name', type: 'string' },
    ],
    name: 'canUseFundName',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_asset', type: 'address' }],
    name: 'assetIsRegistered',
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
    inputs: [
      { name: '_asset', type: 'address' },
      { name: '_assetIndex', type: 'uint256' },
    ],
    name: 'removeAsset',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_fees', type: 'address[]' }],
    name: 'registerFees',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_asset', type: 'address' },
      { name: '_name', type: 'string' },
      { name: '_symbol', type: 'string' },
      { name: '_url', type: 'string' },
      { name: '_reserveMin', type: 'uint256' },
      { name: '_standards', type: 'uint256[]' },
      { name: '_sigs', type: 'bytes4[]' },
    ],
    name: 'updateAsset',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'bytes32' }],
    name: 'fundNameHashToOwner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_adapter', type: 'address' }],
    name: 'exchangeAdapterIsRegistered',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_exchange', type: 'address' },
      { name: '_adapter', type: 'address' },
      { name: '_takesCustody', type: 'bool' },
      { name: '_sigs', type: 'bytes4[]' },
    ],
    name: 'registerExchangeAdapter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_adapter', type: 'address' }],
    name: 'getAdapterFunctionSignatures',
    outputs: [{ name: '', type: 'bytes4[]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_exchange', type: 'address' },
      { name: '_adapter', type: 'address' },
      { name: '_takesCustody', type: 'bool' },
      { name: '_sigs', type: 'bytes4[]' },
    ],
    name: 'updateExchangeAdapter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'registeredVersions',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getRegisteredExchangeAdapters',
    outputs: [{ name: '', type: 'address[]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_name', type: 'string' }],
    name: 'isValidFundName',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'ethfinexWrapperRegistry',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_asset', type: 'address' }],
    name: 'getName',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getRegisteredVersions',
    outputs: [{ name: '', type: 'address[]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_nativeAsset', type: 'address' }],
    name: 'setNativeAsset',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_asset', type: 'address' },
      { name: '_sig', type: 'bytes4' },
    ],
    name: 'assetMethodIsAllowed',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'versionInformation',
    outputs: [
      { name: 'exists', type: 'bool' },
      { name: 'name', type: 'bytes32' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_adapter', type: 'address' }],
    name: 'exchangeForAdapter',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'isFeeRegistered',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'nativeAsset',
    outputs: [{ name: '', type: 'address' }],
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
    name: 'MAX_FUND_NAME_BYTES',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
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
    constant: false,
    inputs: [{ name: '_registry', type: 'address' }],
    name: 'setEthfinexWrapperRegistry',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'registeredExchangeAdapters',
    outputs: [{ name: '', type: 'address' }],
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
    inputs: [{ name: '_who', type: 'address' }],
    name: 'isFundFactory',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_mlnToken', type: 'address' }],
    name: 'setMlnToken',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'registeredAssets',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'exchangeInformation',
    outputs: [
      { name: 'exists', type: 'bool' },
      { name: 'exchangeAddress', type: 'address' },
      { name: 'takesCustody', type: 'bool' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MGM',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_priceSource', type: 'address' }],
    name: 'setPriceSource',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
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
    inputs: [{ name: '_MGM', type: 'address' }],
    name: 'setMGM',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_who', type: 'address' }],
    name: 'isFund',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_asset', type: 'address' }],
    name: 'getSymbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
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
    inputs: [{ name: '_asset', type: 'address' }],
    name: 'getDecimals',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getRegisteredAssets',
    outputs: [{ name: '', type: 'address[]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'fundsToVersions',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_name', type: 'string' },
    ],
    name: 'reserveFundName',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'bytes32' }],
    name: 'versionNameExists',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_fees', type: 'address[]' }],
    name: 'deregisterFees',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_adapter', type: 'address' },
      { name: '_sig', type: 'bytes4' },
    ],
    name: 'adapterMethodIsAllowed',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'assetInformation',
    outputs: [
      { name: 'exists', type: 'bool' },
      { name: 'name', type: 'string' },
      { name: 'symbol', type: 'string' },
      { name: 'decimals', type: 'uint256' },
      { name: 'url', type: 'string' },
      { name: 'reserveMin', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_adapter', type: 'address' },
      { name: '_adapterIndex', type: 'uint256' },
    ],
    name: 'removeExchangeAdapter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_asset', type: 'address' },
      { name: '_name', type: 'string' },
      { name: '_symbol', type: 'string' },
      { name: '_url', type: 'string' },
      { name: '_reserveMin', type: 'uint256' },
      { name: '_standards', type: 'uint256[]' },
      { name: '_sigs', type: 'bytes4[]' },
    ],
    name: 'registerAsset',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_asset', type: 'address' }],
    name: 'getReserveMin',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_adapter', type: 'address' }],
    name: 'getExchangeInformation',
    outputs: [
      { name: '', type: 'address' },
      { name: '', type: 'bool' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: '_postDeployOwner', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'asset', type: 'address' },
      { indexed: false, name: 'name', type: 'string' },
      { indexed: false, name: 'symbol', type: 'string' },
      { indexed: false, name: 'decimals', type: 'uint256' },
      { indexed: false, name: 'url', type: 'string' },
      { indexed: false, name: 'reserveMin', type: 'uint256' },
      { indexed: false, name: 'standards', type: 'uint256[]' },
      { indexed: false, name: 'sigs', type: 'bytes4[]' },
    ],
    name: 'AssetUpsert',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'exchange', type: 'address' },
      { indexed: true, name: 'adapter', type: 'address' },
      { indexed: false, name: 'takesCustody', type: 'bool' },
      { indexed: false, name: 'sigs', type: 'bytes4[]' },
    ],
    name: 'ExchangeAdapterUpsert',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'asset', type: 'address' }],
    name: 'AssetRemoval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'registry', type: 'address' }],
    name: 'EfxWrapperRegistryChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'engine', type: 'address' }],
    name: 'EngineChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'exchange', type: 'address' }],
    name: 'ExchangeAdapterRemoval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'incentiveAmount', type: 'uint256' }],
    name: 'IncentiveChange',
    type: 'event',
  },
  { anonymous: false, inputs: [{ indexed: true, name: 'MGM', type: 'address' }], name: 'MGMChange', type: 'event' },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'mlnToken', type: 'address' }],
    name: 'MlnTokenChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'nativeAsset', type: 'address' }],
    name: 'NativeAssetChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'priceSource', type: 'address' }],
    name: 'PriceSourceChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: 'version', type: 'address' }],
    name: 'VersionRegistration',
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
