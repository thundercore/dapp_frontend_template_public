import TokenIcon from "components/TokenIcons";
import { contractAddresses } from "constants/index";
import { useCallback, useEffect, useMemo, useState } from "react";
import { networkID } from "utils";
import { getContract, getProviderOrSigner } from "utils/contract";
import { useWeb3Context } from "web3-react";
import tt20 from "constants/abis/tt20.json";
import { fromUnits } from "utils/ethers";
import crypto from "crypto";
import { ToastContainer, toast } from "react-toastify";
import { ethers } from "ethers";

export default function Viewer() {
  const wallet = useWeb3Context();
  const tokens = Object.keys(contractAddresses);
  const { library, account } = useWeb3Context();
  const [userBalances, setuserBalances] = useState<
    {
      token: string;
      balance: string;
    }[]
  >([]);

  const getAllBalances = useCallback(async () => {
    const getTokenDetails = async (token: string) => {
      const contract = getContract(
        contractAddresses[token][networkID],
        tt20,
        library,
        account
      );
      return Promise.all([
        contract.balanceOf(account),
        contract.decimals(),
        token,
      ]);
    };
    if (library && account) {
      let balances = [];
      for (const [balance, decimals, token] of await Promise.all(
        tokens.map((token) => getTokenDetails(token))
      )) {
        balances.push({ token, balance: fromUnits(balance, decimals) });
      }
      setuserBalances(balances);
    }
  }, [library, account, tokens]);

  useEffect(() => {
    getAllBalances();
  }, [getAllBalances]);

  const randomAddr = useMemo(() => {
    const id = crypto.randomBytes(32).toString("hex");
    const privateKey = "0x" + id;
    const wallet = new ethers.Wallet(privateKey);
    console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);
    return wallet.address;
  }, []);

  const onclick = async () => {
    const signer = getProviderOrSigner(library, account);
    const tx = await signer.sendTransaction({
      to: randomAddr,
      value: ethers.utils.parseEther("1.0"),
    });
    toast(`success!`);
    console.log("tx.hash:", tx.hash);
  };

  if (!wallet.account) return null;
  return (
    <div className="viewer">
      <ToastContainer />
      <div className="viewer-balances">
        {userBalances.map((item) => (
          <div className="viewer-item" key={item.token}>
            <TokenIcon value={`tt-${item.token}`} width="50" height="50" />
            <h5>Balance: {item.balance}</h5>
          </div>
        ))}
      </div>
      <div>
        <button type="button" className="connect" onClick={onclick}>
          Send 1 TT to a random address
        </button>
      </div>
    </div>
  );
}
