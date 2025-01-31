import { useState } from "react";
import "./style/display.css"
const Display = ({vals, setVals}) => {
    const [sort, setSort] = useState(1);

    const handleCheck = (id) => {
      const newVals = vals.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
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
      {sortedVals.map((item) => (
        
        <li key={item.id} className="checkbox-item">
        <label >
            <input
              type="checkbox"
              checked={item.checked}
              value={item.text}
              onChange={() => handleCheck(item.id)}
            />
            {item.text}
            </label>
            <p>({item.createAt})</p>
        </li>
        
      ))}
    </ul>
    </>
  );
};
export default Display;