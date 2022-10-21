import React from 'react'
import { useState } from 'react'

const Content = () => {
    const [color, setColor] = useState('Empty...')

    const handleChange = (event) => {
        setColor(event.target.value)
    }

    return (
        <div className='container'>
            <div className="colorArea" style={
                {
                    backgroundColor: `#${color}`
                }
            }>
                {color}
            </div>
            <div className="colorNameArea" >
                <label htmlFor="#">#</label>
                <input
                    type="text"
                    minLength={3}
                    maxLength={6}
                    placeholder="Enter color name in HEX Format..."
                    autoFocus
                    onChange={handleChange}
                    pattern="[A-Fa-f]"
                    title="Three letters"
                />
            </div>
        </div >
    )
}

export default Content