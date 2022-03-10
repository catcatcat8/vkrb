import secrets from '../secrets'

interface Node {
  short: string
  name: string
  scanner: string
  rpc: string
  chainId: number
}

const names = {
  eth_mainnet: 'Etherium',
  bsc_mainnet: 'Binance Smart Chain',
  polygon_mainnet: 'Polygon Mainnet',
  avax_mainnet: 'Avalanche Mainnet',
  ftm_mainnet: 'Fantom Mainnet',
  rinkeby: 'Rinkeby',
  ropsten: 'Ropsten',
  bsc_testnet: 'Binance Smart Chain Testnet',
  polygon_testnet: 'Polygon Mumbai Testnet',
  avax_testnet: 'Avalanche Fuji Testnet',
  ftm_testnet: 'Fantom Testnet',
}

const chainIds = {
  eth_mainnet: 1,
  bsc_mainnet: 56,
  polygon_mainnet: 137,
  avax_mainnet: 43114,
  ftm_mainnet: 250,
  rinkeby: 4,
  ropsten: 3,
  bsc_testnet: 97,
  polygon_testnet: 80001,
  avax_testnet: 43113,
  ftm_testnet: 4002,
}

const scanners = {
  eth_mainnet: 'https://etherscan.io/',
  bsc_mainnet: 'https://bscscan.com/',
  polygon_mainnet: 'https://polygonscan.com/',
  avax_mainnet: 'https://snowtrace.io/',
  ftm_mainnet: 'https://ftmscan.com/',
  rinkeby: 'https://rinkeby.etherscan.io/',
  ropsten: 'https://ropsten.etherscan.io/',
  bsc_testnet: 'https://testnet.bscscan.com/',
  polygon_testnet: 'https://mumbai.polygonscan.com/',
  avax_testnet: 'https://testnet.snowtrace.io/',
  ftm_testnet: 'https://testnet.ftmscan.com/',
}

export function node(name: string): Node {
  switch (name) {
    /// mainnets
    case 'eth_mainnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/eth/mainnet`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }
    case 'bsc_mainnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/bsc/mainnet`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }
    case 'polygon_mainnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/polygon/mainnet`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }
    case 'avax_mainnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/avalanche/mainnet`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }
    case 'ftm_mainnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/fantom/mainnet`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }

    /// testnets
    case 'bsc_testnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/bsc/testnet`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }

    case 'polygon_testnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/polygon/mumbai`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }

    case 'avax_testnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/avalanche/testnet`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }

    case 'ftm_testnet':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/fantom/testnet`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }

    case 'ropsten':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/eth/ropsten`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }
    case 'rinkeby':
      return {
        rpc: `https://speedy-nodes-nyc.moralis.io/${secrets.moralis}/eth/rinkeby`,
        chainId: chainIds[name],
        scanner: scanners[name],
        name: names[name],
        short: name,
      }
  }
  return {} as Node
}
