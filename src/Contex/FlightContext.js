import React, { createContext, useEffect, useState } from 'react';

const FilterContext = createContext({
  filter_data: {},
  setFilterData: (filterData) => { },
  clearFilterData: () => { }
})

export const FilterContextProvider = props => {
  const [filterData, setFilterData] = useState({});

  useEffect(() => {
    const storedFilterData = localStorage.getItem('filter_data');
    setFilterData(JSON.parse(storedFilterData));
  }, []);

  const clearFilterData = () => {
    localStorage.removeItem('filter_data');
    setFilterData(null);
  }

  const addFilterData = (filterData) => {
    localStorage.setItem('filter_data', JSON.stringify(filterData));
    setFilterData(filterData);
  }

  return (
    <FilterContext.Provider value={{ filter_data: filterData, setFilterData: addFilterData, clearFilterData: clearFilterData }}>{props.children}</FilterContext.Provider>
  )
}
export default FilterContext;