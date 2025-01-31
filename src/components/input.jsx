import { useState } from "react";
import "./style/input.css"
const Input = ({val, setVal, setVals}) => {
    const [priority, setPriority] = useState(1);
    const addButton = (e) => {
        e.preventDefault();
        if(val.trim() ===""){
            alert("値を入力してください");
            return;
        }
        setVals((prevVals) => [
            ...prevVals,
            { text: val, checked: false, priority }
          ]);
          setVal("");
    }
    const selectChange = (e) => {
        setPriority(Number(e.target.value));
    }
    
    return (
    <div className="input-container">
    <form onSubmit={addButton}>
    <input 
    type="text" 
    value={val || ""}
    onChange={(e)=> setVal(e.target.value)}
    placeholder="やるべきこと..."
    />
    <button>追加</button>
    </form>
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
