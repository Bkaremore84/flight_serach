import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './FlightList.scss';

import FlightListCard from '../../Component/FlightListCard/FlightListCard';
import FlightListHeader from '../../Component/FlightListHeader/FlightListHeader';
import FlightFilter from './FlightFilter';


const FlightList = props => {
 
  const [flightsData, setFlightData] = useState([]);
  const [filterObject, setFilterObject] = useState(null);

  const getFlightsData = () => {
    axios.get('https://tw-frontenders.firebaseio.com/advFlightSearch.json')
      .then(res => {
        if (res?.status === 200) {
          setFlightData(res?.data);
        }
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getFlightsData();
  }, []);


  const filterFlight = ()=>{
    let filterData = flightsData;
    if(filterObject !== null){
      filterData = flightsData.filter(data=> 
        data.origin === filterObject.origin.label &&  data.destination === filterObject.destination.label 
        && data.date === filterObject.departureDate
        )
    }
    return filterData;
    }

  return (
    <div className='container'>
      <FlightFilter setFilterObject={setFilterObject}/>

      <div className='flight-list-container'>
        {filterObject !== null? <FlightListHeader filterObject = {filterObject} flightCount={filterFlight().length}/> : <h3>All flights</h3>}

        {
          filterFlight().map((item, index) => <FlightListCard {...item} key={item?.flightNo} />)
        }

      </div>
    </div>
  )
}

export default FlightList
