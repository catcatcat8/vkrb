const ETH_API = 'M5DSQUGVKBU2AGJIA3ZQCH4XUSI69YUY31'
const BSC_API = 'KNUFGRMM7S6PVAX84RZAPCGVTPXAZ6W4QZ'
const POLYGON_API = ''
const AVAX_API = ''
const FTM_API = ''

const prod = ['88c2c91c9080ce27ef8acbcbe4cf13b8be9367c29a04e82e183d5044808a916c']
const test = ['88c2c91c9080ce27ef8acbcbe4cf13b8be9367c29a04e82e183d5044808a916c']

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