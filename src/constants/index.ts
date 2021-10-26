// testnet network ID: 18, mainnet network ID: 108
export const contractAddresses: {
  [key: string]: { [key in 18 | 108]: string };
} = {
  usdt: {
    18: "0xB1Fb0b14Ffea209ABa1e62ff3F2F3DFD2eaa9FE0",
    108: "0x4f3C8E20942461e2c3Bdd8311AC57B0c222f2b82",
  },
  usdc: {
    18: "0x1d8e61c62ceC1aabd2c36cd22E54Ba831c805f8B",
    108: "0x22e89898A04eaf43379BeB70bf4E38b1faf8A31e",
  },
  busd: {
    18: "0x0538575FD08d69166AB528aA62C1ba46E3cA3Ae8",
    108: "0xbeb0131d95ac3f03fd15894d0ade5dbf7451d171",
  },
};
