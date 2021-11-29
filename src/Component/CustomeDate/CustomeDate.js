import React from 'react';
import {Form} from 'react-bootstrap';

import './CustomeDate.scss';

const CustomeDate = ({value, onChange, placeholder}) => {
    return (
       <Form.Control 
       type='date' 
       value={value} 
       onChange={onChange} 
       placeholder={placeholder} 
       className='custom-date-input' 
       max='2025-1-1'
       />
    )
}

export default CustomeDate
