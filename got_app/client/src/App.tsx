import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <CardList />
        </main>
        <Footer />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </div>
  );
}

export default App;
