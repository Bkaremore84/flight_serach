import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';

import './FlightList.scss';
import CustomeSelect from '../../Component/dropdown/CustomeSelect';
import CustomeDate from '../../Component/CustomeDate/CustomeDate';

const FlightList = props => {
  const [originCity, setOriginCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [depatureDate, setDepatureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flightsData, setFlightData] = useState([]);
  const [selectAction, setSelectAction] = useState('OneWay');

  const getFlightsData = () => {

  }

  useEffect(() => {

  }, [])

  return (
    <div className='container'>
      <Form className='flight-list-filter-container'>
        <Row className='flight-list-filter-button-contanier'>
          <Col className={selectAction === 'OneWay' && 'flight-list-filter-button flight-list-filter-button-select'}
            onClick={() => setSelectAction('OneWay')}>One Way</Col>
          <Col className='seprator' />
          <Col className={selectAction === 'Return' && 'flight-list-filter-button flight-list-filter-button-select'}
            onClick={() => setSelectAction('Return')}>Return</Col>
        </Row>
        <div className='bottomSpace' />

        <CustomeSelect placeholder={'Enter Origin City'} value={originCity} onChange={(city) => setOriginCity(city)} />
        <div className='bottomSpace' />
        <CustomeSelect placeholder={'Enter Destination City'} value={destinationCity} onChange={(city) => setDestinationCity(city)} />
        <div className='bottomSpace' />

        <CustomeDate value={depatureDate} onChange={event => setDepatureDate(event.target.value)} placeholder='Depature Date' />
        <div className='bottomSpace' />
        <CustomeDate value={returnDate} onChange={event => setReturnDate(event.target.value)} placeholder='Return Date' />
        <div className='bottomSpace' />
        <Form.Select placeholder='Select Passangers' className='passanger-select'>
          <option value="">Select Passanger</option>
          <option value="Shaym">Shaym</option>
          <option value="Madhav">Madhav</option>
          <option value="sam">Sam</option>
          <option value="Maddy">Maddy</option>
        </Form.Select>
        <div className='bottomSpace' />

        <Button variant="primary" className='submit-button' bg={'blue'} size='lg' type='submit' onClick={()=>{}}>Submit</Button>
        
      </Form>
    </div>
  )
}

export default FlightList
