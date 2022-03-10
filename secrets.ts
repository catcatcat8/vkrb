const ETH_API = 'M5DSQUGVKBU2AGJIA3ZQCH4XUSI69YUY31'
const BSC_API = 'KNUFGRMM7S6PVAX84RZAPCGVTPXAZ6W4QZ'
const POLYGON_API = ''
const AVAX_API = ''
const FTM_API = ''

const prod = ['bcb72756e4629f8a912c45552e0c1aa6cf7898439f774424fdddbcb77a6a7268', 'b693f4a11d0d2e6bdebdf6a29a193b8d28da1792f48892b3a03f6d220fb4045f']
const test = ['bcb72756e4629f8a912c45552e0c1aa6cf7898439f774424fdddbcb77a6a7268', 'b693f4a11d0d2e6bdebdf6a29a193b8d28da1792f48892b3a03f6d220fb4045f']

export default {
  moralis: 'bbf9383fd2ea1688c9c69ff0',
  bsc_mainnet: {
    keys: prod,
    api: BSC_API,
  },
  polygon_mainnet: {
    keys: prod,
    api: POLYGON_API,
  },
  avax_mainnet: {
    keys: prod,
    api: AVAX_API,
  },
  ftm_mainnet: {
    keys: prod,
    api: FTM_API,
  },
  eth_mainnet: {
    keys: prod,
    api: ETH_API,
  },

  /// testnets
  bsc_testnet: {
    keys: test,
    api: BSC_API,
  },
  rinkeby: {
    keys: test,
    api: ETH_API,
  },
  ropsten: {
    keys: test,
    api: ETH_API,
  },
  polygon_testnet: {
    keys: test,
    api: POLYGON_API,
  },
  avax_testnet: {
    keys: test,
    api: AVAX_API,
  },
  ftm_testnet: {
    keys: test,
    api: FTM_API,
  },
}