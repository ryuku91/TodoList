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
    setSort(Number(e.target.value));
   }

   const sortedVals = [...vals].sort((a,b) => {
    if(sort === 1){
        return 0;
    } else if (sort === 2){
        return a.priority - b.priority;
    }
    return 0;
   });

   return (
    <>
    <select name="sort" value={sort} onChange={sortChange}>
        <option value={1}>作成時</option>
        <option value={2}>優先順</option>
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