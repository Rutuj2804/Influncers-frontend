import React from 'react'

const Radio = ({ name, color, checked }) => {
    return (
        <label for={`radio${color}`} className="radio_Label" >
                <input id={`radio${color}`} name={name} type="radio" checked={checked} className="radio_input" />
                <div className={`radio_Radio radio_${color}`}></div>
                {/* label */}
        </label>
    )
}

export default Radio
