import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

export const contractAddress = "0x5CE11Ea876a49F548137A79FB3BC200819BD7733";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});