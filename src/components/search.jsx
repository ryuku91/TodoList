import { useState } from "react";

const Search = ({vals, setFilterVals}) => {
    const [filterVal, setFilterVal] = useState("");
    const searchValue = (e) => {
        const value = e.target.value;
        setFilterVal(value);
        if(value === ""){
            setFilterVals(vals);
        } else {
        setFilterVals(vals.filter((val) => {
            return val.text.includes(value);
        
        }))
    }
    }
    return (
        <>
            <input 
                type="text" 
                value={filterVal}
                onChange={searchValue}
                placeholder="検索..."
            />
        </>
    )
}
export default Search;