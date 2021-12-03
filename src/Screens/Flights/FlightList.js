import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './FlightList.scss';

import FlightListCard from '../../Component/FlightListCard/FlightListCard';
import FlightListHeader from '../../Component/FlightListHeader/FlightListHeader';
import FlightFilter from './FlightFilter';
import FilterContext from '../../Contex/FlightContext';

const FlightList = props => {

  const { filter_data, clearFilterData } = useContext(FilterContext);
  
  const [flightsData, setFlightData] = useState([]);
  const [returnFlightsData, setReturnFlightData] = useState([]);
  const [action, setAction] = useState('OneWay');

  const getFlightsData = () => {
    axios.get('https://tw-frontenders.firebaseio.com/advFlightSearch.json')
      .then(res => {
        if (res?.status === 200) {
          setFlightData(res?.data);
          setReturnFlightData(res?.data);
        }
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    clearFilterData();
    getFlightsData();
  }, []);


  const filterFlight = () => {
    let filterData = flightsData;
    if (filter_data !== null) {
      filterData = flightsData.filter(data =>
        data.origin === filter_data.origin
        && data.destination === filter_data.destination
        && data.date === filter_data.departureDate
      )
    }
    return filterData;
  }

  const filterReturnFlight = () => {
    let filterData = returnFlightsData;
    if (filter_data !== null) {
      filterData = returnFlightsData.filter(data =>
        data.origin === filter_data.destination
        && data.destination === filter_data.origin
        && data.date === filter_data.returnDate
      )
    }
    return filterData;
  }

  return (
    <div className='container'>
      <FlightFilter setAction={setAction} />

      <div className='flight-list-container'>
        <FlightListHeader
          flightCount={filterFlight().length}
          returnFlightCount={filterReturnFlight().length}
          action={action} />

        {
          action === 'Return' && filter_data != null ?
            <div className='flight-list-split-container'>
              <div className='flight-list-split-container-child split-card-full'>
                {
                  filterFlight().map((item, index) => <FlightListCard {...item} key={index} />)
                }
              </div>
              <div className='flight-list-split-container-child flight-list-split-container-seprator' />
              <div className='flight-list-split-container-child split-card-full'>
                {
                  filterReturnFlight().map((item, index) => <FlightListCard {...item} key={index} />)
                }
              </div>
            </div>
            :
            <>
              {
                filterFlight().map((item, index) => <FlightListCard {...item} key={index} />)
              }
            </>
        }
      </div>
    </div>
  )
}

export default FlightList
