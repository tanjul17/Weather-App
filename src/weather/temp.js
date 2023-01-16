// https://api.openweathermap.org/data/2.5/weather?q=narsinghpur&appid=7f449a62245567f420012937ce74e7fb


import React, { useEffect, useState } from 'react'
import Weathercard from './weathercard';
import "./style.css"

const Temp = () => {
  const [searchValue,setSearchValue]= useState("narsinghpur");
  const [tempInfo,setTempInfo]=useState({});
  const getWeatherInfo= async()=>{
    try{
      let url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7f449a62245567f420012937ce74e7fb`;

      const res = await fetch(url);
      const data = await res.json();

      const {temp,humidity,pressure} = data.main;
      const {main:weathermood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country,sunset} = data.sys;

      const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }
      setTempInfo(myNewWeatherInfo)
    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{},[]);
  return (
    <>
    <div className="wrap">
      <div className="search">
        <input type="search"
        placeholder='search...'
        autoFocus id='search'
        className='searchTerm' 
        value={ searchValue}
        onChange={(e)=>setSearchValue(e.target.value)} 
        />

        <button className='searchButton' type='button' onClick={getWeatherInfo}>
          Search
        </button>
      </div>
    </div>
    {/* //our temp card */}
    <Weathercard tempInfo={tempInfo}/>

    </>
  )
}

export default Temp





















// import React, { useState, useEffect } from "react";

// import Weathercard from "./weathercard";
// import "./style.css";

// const Temp = () => {
//   const [searchValue, setSearchValue] = useState("Narsinghpur");
//   const [tempInfo, setTempInfo] = useState({});

//   const getWeatherInfo = async () => {
//     try {
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={WriteYourAPIKey}`;

//       let res = await fetch(url);
//       let data = await res.json();

//       const { temp, humidity, pressure } = data.main;
//       const { main: weathermood } = data.weather[0];
//       const { name } = data;
//       const { speed } = data.wind;
//       const { country, sunset } = data.sys;

//       const myNewWeatherInfo = {
//         temp,
//         humidity,
//         pressure,
//         weathermood,
//         name,
//         speed,
//         country,
//         sunset,
//       };

//       setTempInfo(myNewWeatherInfo);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getWeatherInfo();
//   }, []);

//   return (
//     <>
//       <div className="wrap">
//         <div className="search">
//           <input
//             type="search"
//             placeholder="search..."
//             autoFocus
//             id="search"
//             className="searchTerm"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />

//           <button
//             className="searchButton"
//             type="button"
//             onClick={getWeatherInfo}>
//             Search
//           </button>
//         </div>
//       </div>

//       {/* our temp card  */}
//       <Weathercard {...tempInfo} />
//     </>
//   );
// };

// export default Temp; 