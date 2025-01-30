import { useState } from "react";
import "./style/input.css"
const Input = ({val, setVal, vals, setVals}) => {
    const [priority, setPriority] = useState(1);
    const addButton = () => {
        
        setVals([...vals, { text: val, checked: false, priority}]);
        setVal("");
    }
    const selectChange = (e) => {
        const priorityValue = e.target.value;

        if(priorityValue === "priority1"){
            setPriority(1);
        } else if (priorityValue === "priority2"){
            setPriority(2);
        } else if (priorityValue === "priority3")
            setPriority(3);
    }
    
    return (
    <div className="input-container">
    <input 
    type="text" 
    onChange={(e)=> setVal(e.target.value)}
    />
    <button onClick={addButton}>追加</button>
    <div className="container">
    <select name="priorityA" onChange={selectChange}>
        <option value="priority1">大</option>
        <option value="priority2">中</option>
        <option value="priority3">小</option>
    </select>
        </div>
    </div> 
    )
}
export default Input;
