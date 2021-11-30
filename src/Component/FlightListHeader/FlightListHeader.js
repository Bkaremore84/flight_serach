import React from 'react';
import { GiCommercialAirplane } from "react-icons/gi";
import {Row, Col} from 'react-bootstrap';

import './FlightListHeader.scss';

const FlightListHeader = ({filterObject, flightCount}) => {
    return (
        <div className='flight-list-header-strip'>
        <div className='flight-list-header-icon'>
          <GiCommercialAirplane size={25} color={'#a0a3a0'} />
        </div>
        <Row>
          <Col className='flight-list-header-strip-main-title'>{filterObject?.origin?.label} to {filterObject?.destination?.label}</Col>
          <Col className='flight-list-header-strip-sub-title'>{flightCount} flight found {`  `}
          {new Date(filterObject?.departureDate).toLocaleString('en-US', { weekday: 'short' })}
          {`  `}{new Date(filterObject?.departureDate).toLocaleString('en-US', { day: '2-digit' })} {`  `}
          {new Date(filterObject?.departureDate).toLocaleString('en-US', { month: 'long' })}</Col>
        </Row>
      </div>
    )
}

export default FlightListHeader
