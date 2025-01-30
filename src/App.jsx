import { useState, useEffect } from "react";
import Title from "./components/title"
import Input from "./components/input"
import Display from "./components/display"
import Progress from "./components/progress";
import Search from "./components/search";

import "./App.css";

function App() {
  const [val, setVal] = useState();
  const [vals, setVals] = useState([]);
  const [filteredVals, setFilteredVals] = useState(vals);

  useEffect(() => {
    setFilteredVals(vals);
  }, [vals])
  return (
    <>
    <div className="head">
      <Title />
      <Search vals={vals} setFilterVals={setFilteredVals}/>
      <Input vals={vals} setVals={setVals} val={val} setVal={setVal}/>
      </div>
      <Display vals={filteredVals} setVals={setVals}/>
      <Progress vals={filteredVals}/>
    </>

  )
}

export default App;
