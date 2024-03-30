import { http } from 'viem';
import { Account, Address, privateKeyToAccount } from 'viem/accounts';
import { StoryClient, StoryConfig } from "@story-protocol/core-sdk";

const account: Account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as Address);

const config: StoryConfig = {
  transport: http(process.env.RPC_PROVIDER_URL),
  account: account // the account object from above
};
export const client = StoryClient.newClient(config);
