import { useState } from "react";
import "./style/display.css"
const Display = ({vals, setVals}) => {
    const [sort, setSort] = useState(1);
    const handleCheck = (index) => {
    const newVals = [...vals];
    newVals[index].checked = !newVals[index].checked;
    setVals(newVals);
   }
   const sortChange = (e) => {
    const sortValue = e.target.value;
    if(sortValue === "createTime"){
        setSort(1);
    } else if (sortValue === "priority"){
        setSort(2);
    }
   }
   const sortedVals = [...vals].sort((a,b) => {
    if(sort === 1){
        return vals.indexOf(a) - vals.indexOf(b);
    } else if (sort === 2){
        return a.priority - b.priority;
    }
    return 0;
   })
   return (
    <>
    <select name="sort" onChange={sortChange}>
        <option value="createTime">作成時</option>
        <option value="priority">優先順</option>
    </select>
    <ul className="checkbox-list">
      {sortedVals.map((item, index) => (
        <li key={index} className="checkbox-item">
          
            <input
              type="checkbox"
              checked={item.checked}
              value={item.text}
              onChange={() => handleCheck(index)}
            />
            {item.text}
          
        </li>
      ))}
    </ul>
    </>
  );
};
export default Display;