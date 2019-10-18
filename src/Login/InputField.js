import React, { useState } from 'react';
import {
    InputFields,
} from '../Styles/Login/login';


// reusable input field component, requires name and placeholder to be sent as props
const InputField = (props) => {
    const { name, placeholder, type } = props;
    const [newValue, setNewValue] = useState('');

    return (
        <InputFields
            name={name || ''}
            placeholder={placeholder || ''}
            value={newValue}
            onChange={e => setNewValue(e.target.value)}
            type={type}
        />
    )
}

export default InputField