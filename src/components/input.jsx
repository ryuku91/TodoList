import { useState } from "react";
import "./style/input.css"
const Input = ({val, setVal, vals, setVals}) => {
    const [priority, setPriority] = useState(1);
    const addButton = () => {
        if(val.trim() ===""){
            alert("値を入力してください");
            return;
        }
        setVals([...vals, { text: val, checked: false, priority}]);
        setVal("");
    }
    const selectChange = (e) => {
        setPriority(Number(e.target.value));
    }
    
    return (
    <div className="input-container">
    <input 
    type="text" 
    value={val || ""}
    onChange={(e)=> setVal(e.target.value)}
    />
    <button onClick={addButton}>追加</button>
    <div className="container">
    <select name="priorityA" value={priority} onChange={selectChange}>
        <option value={1}>大</option>
        <option value={2}>中</option>
        <option value={3}>小</option>
    </select>
        </div>
    </div> 
    )
}
export default Input;
