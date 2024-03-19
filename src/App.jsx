// import { useState } from 'react'

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import LineChart from "./LineChart/LineChart";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto">
        <NavBar />
        <PriceOptions />
        <LineChart />
      </div>
    </>
  );
}

export default App;
