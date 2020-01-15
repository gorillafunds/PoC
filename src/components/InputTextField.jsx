import React from "react";

const InputTextField = ({name, input_type, placeholder, required, handleChange, value}) => (
    <div>
        <input
        type="text"
        name={name}
        key={name}
        required={required}
        autoComplete="off"
        placeholder={placeholder}
        onChange={handleChange}
        value = {value}
        />
    </div>
)

export default InputTextField;