// import { useState } from 'react'

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <PriceOptions />
      </div>
    </>
  );
}

export default App;
