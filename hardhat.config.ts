import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import "@nomiclabs/hardhat-waffle"
import 'hardhat-deploy'
import "@nomiclabs/hardhat-etherscan";

import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import 'hardhat-contract-sizer'

import './extensions/time'
import './extensions/bignumber'
import './extensions/string'
import './extensions/balanceManipulation'

import secrets from './secrets'
import { node } from './utils/node'

const MY_WALLET = '0x3Ba6810768c2F4FD3Be2c5508E214E68B514B35f'

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()
  for (const account of accounts) {
    console.log(account.address)
  }
})

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.1",
      },
    ],
  },
  namedAccounts: {
    owner: {
      default: 0,
      bsc_testnet: MY_WALLET,
      rinkeby: MY_WALLET
    },
  },
  networks: {
    hardhat: {
      tags: ['preprod'],
      forking: {
        url: 'https://bsc-dataseed1.defibit.io/',
        enabled: false
      },
    },
    /// mainnets
    eth_mainnet: {
      url: node('eth_mainnet').rpc,
      accounts: secrets.eth_mainnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.eth_mainnet.api,
        },
      },
    },
    bsc_mainnet: {
      url: node('bsc_mainnet').rpc,
      accounts: secrets.bsc_mainnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.bsc_mainnet.api,
        },
      },
    },
    polygon_mainnet: {
      url: node('polygon_mainnet').rpc,
      accounts: secrets.polygon_mainnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.polygon_mainnet.api,
        },
      },
    },
    avax_mainnet: {
      url: node('avax_mainnet').rpc,
      accounts: secrets.avax_mainnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.avax_mainnet.api,
        },
      },
    },
    ftm_mainnet: {
      url: node('ftm_mainnet').rpc,
      accounts: secrets.ftm_mainnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.ftm_mainnet.api,
        },
      },
    },

    /// testnets
    ropsten: {
      url: node('ropsten').rpc,
      accounts: secrets.ropsten.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.ropsten.api,
        },
      },
    },
    rinkeby: {
      url: node('rinkeby').rpc,
      accounts: secrets.rinkeby.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.rinkeby.api,
        },
      },
    },
    bsc_testnet: {
      url: node('bsc_testnet').rpc,
      accounts: secrets.bsc_testnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.bsc_testnet.api,
        },
      },
    },
    polygon_testnet: {
      url: node('polygon_testnet').rpc,
      accounts: secrets.polygon_testnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.polygon_testnet.api,
        },
      },
    },
    avax_testnet: {
      url: node('avax_testnet').rpc,
      accounts: secrets.avax_testnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.avax_testnet.api,
        },
      },
    },
    ftm_testnet: {
      url: node('ftm_testnet').rpc,
      accounts: secrets.ftm_testnet.keys,
      tags: ['prod'],
      verify: {
        etherscan: {
          apiKey: secrets.ftm_testnet.api,
        },
      },
    },
  },
  etherscan: {
    apiKey: secrets.bsc_testnet.api,
  },
  gasReporter: {
    enabled: false,
    currency: 'USD',
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
  },
  external: {
    deployments: {
      hardhat: [
        "./external-contracts"
      ]
    }
  }
}
export default config