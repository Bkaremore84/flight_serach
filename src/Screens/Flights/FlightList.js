import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './FlightList.scss';

import FlightListCard from '../../Component/FlightListCard/FlightListCard';
import FlightListHeader from '../../Component/FlightListHeader/FlightListHeader';
import FlightFilter from './FlightFilter';


const FlightList = props => {

  const [flightsData, setFlightData] = useState([]);
  const [returnflightsData, setReturnFlightData] = useState([]);
  const [filterObject, setFilterObject] = useState(null);
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
    getFlightsData();
  }, []);


  const filterFlight = () => {
    let filterData = flightsData;
    if (filterObject !== null) {
      filterData = flightsData.filter(data =>
        data.origin === filterObject.origin.label
        && data.destination === filterObject.destination.label
        && data.date === filterObject.departureDate
      )
    }
    console.log("filter list ==>", filterData)
    return filterData;
  }

  const filterReturnFlight = () => {
    let filterData = returnflightsData;
    if (filterObject !== null) {
      filterData = returnflightsData.filter(data =>
        data.origin === filterObject.destination.label
        && data.destination === filterObject.origin.label
        && data.date === filterObject.returnDate
      )
    }
    console.log("filter return list ==>", filterData)
    return filterData;
  }

  return (
    <div className='container'>
      <FlightFilter setFilterObject={setFilterObject} setAction={setAction}/>

      <div className='flight-list-container'>
        <FlightListHeader filterObject={filterObject}
          flightCount={filterFlight().length}
          returnFlightCount={filterReturnFlight().length}
          action={action} />

        {
          action === 'Return' && filterObject != null ?
          <div className='flight-list-split-container'>
            <div className='flight-list-split-container-child split-card-full'>
              {
                filterFlight().map((item, index) => <FlightListCard {...item} key={item?.flightNo} />)
              }
            </div>
            <div className='flight-list-split-container-child flight-list-split-container-seprator' />
            <div className='flight-list-split-container-child split-card-full'>
              {
                filterReturnFlight().map((item, index) => <FlightListCard {...item} key={item?.flightNo} />)
              }
            </div>
            </div>
            :
            <>
             {
                filterFlight().map((item, index) => <FlightListCard {...item} key={item?.flightNo} />)
              }
            </>
          }
         
      </div>
    </div>
  )
}

export default FlightList
