import React from 'react'
import Header from './components/Header'
import Input_box from './components/Input_box'
import Button from './components/Button'
import Show_result from './components/Show_result';
import weather from './Weather';
import './Stle.css'
function App() {


  const input=document.getElementById('input');
  const searchBtn=document.getElementById('search-btn');
  searchBtn.addEventListener("click",()=>{
      getWeatherDetail();
  })
   const getWeatherDetail=()=>{
      const apiKey='6cbac7aff8c1b6b59caf5e560d50f464';
      let countryName =input.value;
      const apiURl=`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;
  
      fetch(apiKey).then((response)=>{
           return response.json()
      })
      .then((data)=>{
  console.log(data);
      })
  }








  return (
    <div className='Weather_card'>
  <Header />
  <Input_box/>
  <Button/>
  <Show_result />
    </div>
  )
}

export default App
