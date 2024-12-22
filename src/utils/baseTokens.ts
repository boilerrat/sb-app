// src/utils/baseTokens.ts
import type { Token } from '@coinbase/onchainkit/token';

export const baseTokens: Token[] = [
  {
    name: 'ETH',
    address: '',
    symbol: 'ETH',
    decimals: 18,
    image: 'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
    chainId: 8453,
  },
  {
    name: 'USDC',
    address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    symbol: 'USDC',
    decimals: 6,
    image: 'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/44/2b/442b80bd16af0c0d9b22e03a16753823fe826e5bfd457292b55fa0ba8c1ba213',
    chainId: 8453,
  },
  {
    name: 'DAI',
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    symbol: 'DAI',
    decimals: 18,
    image: 'https://assets.coingecko.com/coins/images/9956/large/4943.png',
    chainId: 8453,
  },
  // Add any other Base tokens you want to support
];