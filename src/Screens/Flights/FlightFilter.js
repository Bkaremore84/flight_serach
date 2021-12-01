import React, { useState } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';

import CustomSelect from '../../Component/dropdown/CustomSelect';
import CustomDate from '../../Component/CustomDate/CustomDate';
import Error from '../../Component/Error/Error';

import './FlightFilter.scss';


const FlightFilter = ({ setFilterObject, setAction }) => {
  const [originCity, setOriginCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [originCityError, setOriginCityError] = useState('');
  const [selectPassenger, setPassenger] = useState('');
  const [desCityError, setDesCityError] = useState('');
  const [depDateError, setDepDateError] = useState('');
  const [retDateError, setRetDateError] = useState('');
  const [passError, setPassError] = useState('');
  const [selectAction, setSelectAction] = useState('OneWay');

  const passengers = [
    { value: "", label: "Select Passengers" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ]

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (originCity === '') {
      setOriginCityError('Please select origin city.');
    }
    if (destinationCity === '') {
      setDesCityError('Please select destination city.');
    }
    if (departureDate === '') {
      setDepDateError('Please select departure date.');
    }
    if (returnDate === '') {
      setRetDateError('Please select return date.');
    }
    if (selectPassenger === '') {
      setPassError('Please select passenger.');
    }
    else if (originCity !== '' && destinationCity !== '' && selectPassenger !== '' && departureDate !== '' 
    // && returnDate !== ''
    ) {

      let filterData = {
        origin: originCity,
        destination: destinationCity,
        departureDate: departureDate.replace(/\-/g, '/'),
        returnDate: returnDate.replace(/\-/g, '/'),
        selectPassenger: selectPassenger,
        action: selectAction
       }
      console.log("filterData==>", filterData);
      setFilterObject(filterData);
    }
  }

  return (
    <Form className='flight-list-filter-container'>
      <div className='flight-list-filter-button-container-outer'>

        <Row className='flight-list-filter-button-container'>
          <Col className={`flight-list-filter-button ${selectAction === 'OneWay' && 'flight-list-filter-button-select'}`}
            onClick={() =>{ 
              setSelectAction('OneWay');
              setAction('OneWay');
              }}>One Way</Col>
          <Col className='separator' />
          <Col className={`flight-list-filter-button ${selectAction === 'Return' && 'flight-list-filter-button-select'}`}
            onClick={() =>{ 
              setSelectAction('Return');
              setAction('Return');
              }}>Return</Col>
        </Row>
      </div>
      <div className='bottomSpace' />

      <CustomSelect placeholder={'Enter Origin City'} value={originCity} onChange={(city) => {
        setOriginCity(city);
        setOriginCityError('');
      }}
        error={originCityError} />
      <div className='bottomSpace' />
      <CustomSelect placeholder={'Enter Destination City'} value={destinationCity} onChange={(city) => {
        setDestinationCity(city);
        setDesCityError('');
      }}
        error={desCityError} />
      <div className='bottomSpace' />

      <CustomDate value={departureDate} onChange={event => {
        setDepartureDate(event.target.value);
        setDepDateError('');
      }}
        placeholder='Departure Date' error={depDateError} />
      <div className='bottomSpace' />
      {
        selectAction === 'Return' &&
        <>
          <CustomDate value={returnDate}
            onChange={event => {
              setReturnDate(event.target.value);
              setRetDateError('');
            }} placeholder='Return Date' error={retDateError} />
          <div className='bottomSpace' />
        </>
      }
      <Form.Select className='passenger-select' value={selectPassenger} onChange={event => {
        setPassenger(event.target.value);
        setPassError('');
      }} >
        {
          passengers.map((item, index) => <option value={item.value} key={item.value}>{item.label}</option>)
        }
      </Form.Select>
      <Error error={passError} />
      <div className='bottomSpace' />
        <div className='submit-button-container'>
      <Button variant="primary" className='submit-button' type='submit' onClick={onSubmitHandler}>Submit</Button>
      </div>
    </Form>
  )
}

export default FlightFilter
