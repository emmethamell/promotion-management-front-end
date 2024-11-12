import { useState } from 'react'

function textInput({onChange, value}) {
    const handleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <>
        <input className="text-input"
            type="text"
            value={value}
            onChange={handleChange}
        />
        </>
    )

}

export default textInput;