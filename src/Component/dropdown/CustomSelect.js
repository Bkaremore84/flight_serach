import React from 'react';
import Select from 'react-select';

import Error from '../Error/Error';

const CustomSelect = ({ placeholder, value, onChange, error }) => {
  const cities = [
    { value: 1, label: "Pune (PNQ)" },
    { value: 2, label: "Mumbai (BOM)" },
    { value: 3, label: "Bengaluru (BLR)"},
    { value: 4, label: "Delhi (DEL)" }];

  return (
    <>
    <Select 
      options={cities} 
      isSearchable={true} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}>
      {cities.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
    </Select>
    <Error error={error}/>
    </>
  )
}

export default CustomSelect
