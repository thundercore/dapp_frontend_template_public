import "./App.css";
import ConnectButton from "components/Button/Connect";
import TokenIcon from "components/TokenIcons";
import Viewer from "components/Viewer";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <main className="App-header">
        <ConnectButton />
        <div className="hero">
          <h1 className="yellow">Welcome to ThunderCore </h1>
          <TokenIcon value="tt" width="200px" height="200px" />
          <Viewer />
        </div>
      </main>
    </div>
  );
};

export default App;
