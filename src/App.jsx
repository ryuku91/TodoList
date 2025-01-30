import { useState } from "react";
import Title from "./components/title"
import Input from "./components/input"
import Display from "./components/display"
import Progress from "./components/progress";

import "./App.css";

function App() {
  const [val, setVal] = useState();
  const [vals, setVals] = useState([]);
  return (
    <>
    <div className="head">
      <Title />
      <Input vals={vals} setVals={setVals} val={val} setVal={setVal} todo={val}/>
      </div>
      <Display vals={vals} setVals={setVals}/>
      <Progress vals={vals}/>
    </>

  )
}

export default App;
