import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Web3Provider, { Connectors } from "web3-react";
import reportWebVitals from "./reportWebVitals";

const { NetworkOnlyConnector, InjectedConnector } = Connectors;
const Injected = new InjectedConnector({
  supportedNetworks: [Number(process.env.REACT_APP_NETWORK_ID || "1")],
});

const Network = new NetworkOnlyConnector({
  providerURL: process.env.REACT_APP_NETWORK_URL || "",
});

const connectors = { Injected, Network };

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <App />
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
