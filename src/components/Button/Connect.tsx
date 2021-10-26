import React from "react";
import { displayEllipsedAddress, switchToThunderCore } from "utils";
import { useWeb3Context } from "web3-react";

const Button: React.FC = () => {
  const context = useWeb3Context();
  const isWrongNetwork = context.error?.message.includes("Unsupported Network");

  const walletButtonText =
    displayEllipsedAddress(context.account) || "Connect wallet";

  const handleConnectWallet = () => {
    if (isWrongNetwork) switchToThunderCore();
    context.setConnector("Injected");
  };

  return (
    <button className="connect" type="button" onClick={handleConnectWallet}>
      <span>{isWrongNetwork ? "Switch To ThunderCore" : walletButtonText}</span>
    </button>
  );
};

export default Button;
