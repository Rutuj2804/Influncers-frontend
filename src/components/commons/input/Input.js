import React from 'react'

const Input = ({ type, name, value, setFormData, formData, isRequired, icon, placeholder, ...rest }) => {

    const handleOnChange = e => {
        setFormData({
            ...formData,
            [name]: e.target.value
        })
    }

    return (
        <div className="auth__InputDiv">
            <input
                type={type}
                name={name}
                value={value}
                onChange={e=>handleOnChange(e)}
                required={isRequired}
                placeholder={placeholder}
                autoComplete="off"
                {...rest}
            />
            <label>{icon}</label>
        </div>
    )
}

export default Input