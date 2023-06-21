import React, { useState } from 'react';

const AutoComplete = ({items}) => {

    let [filterArr,setFilterArr] = useState([]);

    function filterItem(e){
        let str=e.target.value;
        if(str.trim()===''){
            setFilterArr([]);    
            return;
        }
        setFilterArr(items.filter(item => item.includes(str)));
    }

    return (
        <div>
            <input type='text' onChange={filterItem} />
            <ul>{filterArr.map(item => <li>{item}</li>)}</ul>
        </div>
    );
};

export default AutoComplete;