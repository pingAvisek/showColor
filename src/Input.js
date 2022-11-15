import React from 'react'

const Input = ({ colorValue, setColorValue }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="colorValue"></label>
            <input
                type="text"
                autoFocus
                placeholder='Enter the color value:'
                value={colorValue}
                onChange={(e) => setColorValue(e.target.value)}
            />
        </form>
    )
}



export default Input