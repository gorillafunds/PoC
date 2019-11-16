import React from "react";

const DropdownSelect = ({name,required, assets, handleChange}) => (
    
    <div>
        <select name={name} required={required} onChange={handleChange}>
            <option value="">Investable Asset</option>
            {assets.map(element => <option value={element.id} key={element.symbol}>{element.symbol}</option>)}
        </select>
    </div>
)

export default DropdownSelect;
