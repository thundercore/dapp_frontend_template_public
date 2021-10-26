import BUSD from "assets/tokens/busd.png";
import ETH from "assets/tokens/eth.png";
import TT from "assets/tokens/tt.svg";
import USDC from "assets/tokens/usdc.png";
import USDT from "assets/tokens/usdt.png";
import WBTC from "assets/tokens/wbtc.png";
import HT from "assets/tokens/ht.png";
import HUSD from "assets/tokens/husd.png";
import BNB from "assets/tokens/bnb.svg";

interface ITokenIcon {
  value: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function TokenIcon({
  value,
  width = "20px",
  height = "20px",
}: ITokenIcon) {
  const getTokenIcon = (value: any) => (
    <img
      src={value}
      alt="token"
      width={width}
      height={height}
      className="tokenIcon"
    />
  );

  switch (value.toUpperCase()) {
    case "TT":
      return getTokenIcon(TT);
    case "TT-BUSD":
      return getTokenIcon(BUSD);
    case "TT-HUSD":
      return getTokenIcon(HUSD);
    case "TT-ETH":
      return getTokenIcon(ETH);
    case "TT-HT":
      return getTokenIcon(HT);
    case "TT-BNB":
      return getTokenIcon(BNB);
    case "TT-USDC":
      return getTokenIcon(USDC);
    case "TT-USDT":
      return getTokenIcon(USDT);
    case "TT-WBTC":
      return getTokenIcon(WBTC);
    default:
      return null;
  }
}
