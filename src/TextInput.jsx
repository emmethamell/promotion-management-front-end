import { useState } from 'react'

function TextInput({ onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <>
        <input className="text-input"
            type="text"
            onChange={handleChange}
        />
        </>
    )

}

export default TextInput;