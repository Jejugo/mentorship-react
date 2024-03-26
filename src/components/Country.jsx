import React, { useState, useEffect } from 'react'

export default function Country() {

  const [countryFlags, setCountryFlags] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
      .then(res => res.json())
      .then(data => {
        setCountryFlags(data)
      })
  }, []) // empty array means only run once after the first render. 
  
  return (
    <>
      <div>WeatherAPI</div>
      <ul>
        {
          countryFlags.map((country) => (
            <li>
              {country.name.common}
              <img src={country.flags.png} alt={country.name.common} />
            </li>
          ))
        }
      </ul>
    </>
  )
}
