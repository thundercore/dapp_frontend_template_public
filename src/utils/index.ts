import { isAddress } from "./ethers";

export const noByte = "0x";
export const emptyAddress = "0x0000000000000000000000000000000000000000";
export const userDeniedError = 4001;
export const networkID = parseEnv("REACT_APP_NETWORK_ID", "108") as
  | "18"
  | "108";

export const networkInfo = {
  108: {
    chainId: "0x6c",
    chainName: "Thundercore Mainnet",
    rpcUrls: ["https://mainnet-rpc.thundercore.com"],
    iconUrls: ["https://thundercore.github.io/dist/thundercore.png"],
    blockExplorerUrls: ["https://viewblock.io/thundercore"],
    nativeCurrency: {
      name: "Thundercore Token",
      symbol: "TT",
      decimals: 18,
    },
  },
  18: {
    chainId: "0x12",
    chainName: "Thundercore Testnet",
    rpcUrls: ["https://testnet-rpc.thundercore.com"],
    iconUrls: ["https://thundercore.github.io/dist/thundercore.png"],
    blockExplorerUrls: ["https://viewblock.io/thundercore"],
    nativeCurrency: {
      name: "Thundercore Token",
      symbol: "TT",
      decimals: 18,
    },
  },
};

export const displayEllipsedAddress = (
  address: string | null | undefined
): string => {
  const account: string = address || "";
  if (!isAddress(account)) return "";
  return (
    account.slice(0, 6) +
    "..." +
    account.slice(account.length - 4, account.length)
  );
};

export function parseEnv(name: string, defaultValue: string): string {
  const env = process.env[name];
  if (!env) {
    return defaultValue;
  }

  return env;
}

export function switchToThunderCore() {
  if (window.ethereum) {
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [networkInfo[networkID]],
      })
      .catch((error: any) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log("Switch network failed");
        } else {
          console.error(error);
        }
      });
  }
}
