import { privateKeyToAccount, Address, Account } from 'viem/accounts'

// Set up your wallet for this tutorial.
// - Add your private key to your .env file.
// - Add your rpc provider url to your .env file
//      - We recommend the Sepolia test network: https://rpc.ankr.com/eth_sepolia
export const account: Account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`)

// This is a preset PIL policy: https://docs.storyprotocol.xyz/docs/preset-pil-policies
export const NonCommercialSocialRemixingPolicyId = '1'

// A NFT contract address that will be used to represent your IP Assets
export const NFTContractAddress: Address = '0x7ee32b8b515dee0ba2f25f612a04a731eec24f49'

// Sepolia testnet
export const RPCProviderUrl = 'https://rpc.ankr.com/eth_sepolia'

export const mintContractApi = {
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'mint',
    outputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
}
