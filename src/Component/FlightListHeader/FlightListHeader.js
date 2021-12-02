import React from 'react';
import { GiCommercialAirplane } from "react-icons/gi";
import { Row, Col, Container } from 'react-bootstrap';

import './FlightListHeader.scss';

const FlightListHeader = ({ filterObject, flightCount, returnFlightCount, action }) => {

  return (
    <div className='flight-list-header-strip'>
      {
        action === 'OneWay' && filterObject !== null ?
          <div className='flight-list-header-strip-return-outer'>
            <div className='flight-list-header-icon'>
              <GiCommercialAirplane size={25} color={'#a0a3a0'} />
            </div>
            <Row>
              <Col className='flight-list-header-strip-main-title'>{filterObject?.origin} to {filterObject?.destination}</Col>
              <Col className='flight-list-header-strip-sub-title'>{flightCount} flights found {`  `}
                {new Date(filterObject?.departureDate).toLocaleString('en-US', { weekday: 'short' })},
                {`  `}{new Date(filterObject?.departureDate).toLocaleString('en-US', { day: '2-digit' })} {`  `}
                {new Date(filterObject?.departureDate).toLocaleString('en-US', { month: 'long' })}</Col>
            </Row>
          </div>
          :
          action === 'Return' && filterObject !== null ?
            <div className='flight-list-header-strip-return'>

              <div className='flight-list-header-strip-return-outer'>
                <div className='flight-list-header-icon'>
                  <GiCommercialAirplane size={25} color={'#a0a3a0'} />
                </div>
                <Row>
                  <Col className='flight-list-header-strip-main-title'>{filterObject?.origin} to {filterObject?.destination}</Col>
                  <Col className='flight-list-header-strip-sub-title'>{flightCount} flights found {`  `}
                    {new Date(filterObject?.departureDate).toLocaleString('en-US', { weekday: 'short' })},
                    {`  `}{new Date(filterObject?.departureDate).toLocaleString('en-US', { day: '2-digit' })} {`  `}
                    {new Date(filterObject?.departureDate).toLocaleString('en-US', { month: 'long' })}</Col>
                </Row>
              </div>

              <div className='flight-list-header-strip-return-outer'>
                <div className='flight-list-header-icon flight-list-header-icon-return'>
                  <GiCommercialAirplane size={25} color={'#a0a3a0'} />
                </div>
                <Row>
                  <Col className='flight-list-header-strip-main-title'>{filterObject?.destination} to {filterObject?.origin}</Col>
                  <Col className='flight-list-header-strip-sub-title'>{returnFlightCount} flights found {`  `}
                    {new Date(filterObject?.returnDate).toLocaleString('en-US', { weekday: 'short' })},
                    {`  `}{new Date(filterObject?.returnDate).toLocaleString('en-US', { day: '2-digit' })} {`  `}
                    {new Date(filterObject?.returnDate).toLocaleString('en-US', { month: 'long' })}</Col>
                </Row>
              </div>
            </div>
            :
            <div className='flight-list-header-strip-main-title'>All Flights</div>
      }
    </div>
  )
}

export default FlightListHeader
