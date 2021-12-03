import React, {useContext} from 'react';
import { GiCommercialAirplane } from "react-icons/gi";
import { Row, Col } from 'react-bootstrap';

import './FlightListHeader.scss';
import FilterContext from '../../Contex/FlightContext';

const FlightListHeader = ({ flightCount, returnFlightCount, action }) => {
  const {filter_data} = useContext(FilterContext);

  return (
    <div className='flight-list-header-strip'>
      {
        action === 'OneWay' && filter_data !== null ?
          <div className='flight-list-header-strip-return-outer'>
            <div className='flight-list-header-icon'>
              <GiCommercialAirplane size={25} color={'#a0a3a0'} />
            </div>
            <Row>
              <Col className='flight-list-header-strip-main-title'>{filter_data?.origin} to {filter_data?.destination}</Col>
              <Col className='flight-list-header-strip-sub-title'>{flightCount} flights found {`  `}
                {new Date(filter_data?.departureDate).toLocaleString('en-US', { weekday: 'short' })},
                {`  `}{new Date(filter_data?.departureDate).toLocaleString('en-US', { day: '2-digit' })} {`  `}
                {new Date(filter_data?.departureDate).toLocaleString('en-US', { month: 'long' })}</Col>
            </Row>
          </div>
          :
          action === 'Return' && filter_data !== null ?
            <div className='flight-list-header-strip-return'>

              <div className='flight-list-header-strip-return-outer'>
                <div className='flight-list-header-icon'>
                  <GiCommercialAirplane size={25} color={'#a0a3a0'} />
                </div>
                <Row>
                  <Col className='flight-list-header-strip-main-title'>{filter_data?.origin} to {filter_data?.destination}</Col>
                  <Col className='flight-list-header-strip-sub-title'>{flightCount} flights found {`  `}
                    {new Date(filter_data?.departureDate).toLocaleString('en-US', { weekday: 'short' })},
                    {`  `}{new Date(filter_data?.departureDate).toLocaleString('en-US', { day: '2-digit' })} {`  `}
                    {new Date(filter_data?.departureDate).toLocaleString('en-US', { month: 'long' })}</Col>
                </Row>
              </div>

              <div className='flight-list-header-strip-return-outer'>
                <div className='flight-list-header-icon flight-list-header-icon-return'>
                  <GiCommercialAirplane size={25} color={'#a0a3a0'} />
                </div>
                <Row>
                  <Col className='flight-list-header-strip-main-title'>{filter_data?.destination} to {filter_data?.origin}</Col>
                  <Col className='flight-list-header-strip-sub-title'>{returnFlightCount} flights found {`  `}
                    {new Date(filter_data?.returnDate).toLocaleString('en-US', { weekday: 'short' })},
                    {`  `}{new Date(filter_data?.returnDate).toLocaleString('en-US', { day: '2-digit' })} {`  `}
                    {new Date(filter_data?.returnDate).toLocaleString('en-US', { month: 'long' })}</Col>
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
