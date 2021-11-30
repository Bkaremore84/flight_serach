import React from 'react';
import {Form} from 'react-bootstrap';

import './Error.scss';

const Error = ({error}) => {
    return (
        <Form.Control.Feedback className='error'>
            {error}
        </Form.Control.Feedback>
    )
}

export default Error
