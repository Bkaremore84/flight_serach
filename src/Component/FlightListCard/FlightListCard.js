import React from 'react';
import { Button } from 'react-bootstrap';
import { BsBorderAll } from "react-icons/bs";

import './FlightListCard.scss';

const FlightListCard = (item) => {

  const totalHours = (departureTime, arrivalTime) => {
    let result = parseFloat(departureTime.replace(':', '.')) - parseFloat(arrivalTime.replace(':', '.'));
    let finalRes = parseFloat(Math.abs(result)).toFixed(2);
    let splitTime = finalRes.split('.');
    return `${splitTime[0]}h ${splitTime[1]}m`;
  }

  return (
    <div className='flight-list-card'>

      <div className='flight-list-card-child'>
        <BsBorderAll size={40} color={'#a0a3a0'} />
      </div>
      <div className='flight-list-card-child'>
        <div className='flight-list-card-main-text'>{item?.name}</div>
        <div className='flight-list-card-sub-text'>{item?.flightNo}</div>
      </div>

      <div className='flight-list-card-child'>
        <div className='flight-list-card-main-text'>{item?.departureTime}</div>
        <div className='flight-list-card-sub-text'>{item?.origin}</div>
      </div>

      <div className='flight-list-card-child'>
        <div className='flight-list-card-main-text'>{item?.arrivalTime}</div>
        <div className='flight-list-card-sub-text'>{item?.destination}</div>
      </div>

      <div className='flight-list-card-child'>
        <div className='flight-list-card-main-text'>{totalHours(item?.departureTime, item?.arrivalTime)}</div>
        <div className='flight-list-card-sub-text'>Non stop</div>
      </div>

      <div className='flight-list-card-child price'>&#8377; {item?.price}</div>
      <Button variant="primary" className='book-btn' type='submit'>Book</Button>
    </div>
  )
}

export default FlightListCard
