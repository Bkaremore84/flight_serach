import React from 'react';
import {Form} from 'react-bootstrap';

import './CustomDate.scss';
import Error from '../Error/Error';

const CustomDate = ({value, onChange, placeholder,error}) => {
    return (
        <>
       <Form.Control 
       type='date' 
       value={value} 
       onChange={onChange} 
       placeholder={placeholder} 
       className={`custom-date-input $ `}
       />
      <Error error={error}/>
       </>
    )
}

export default CustomDate
