



import React, { useEffect, useState } from 'react'

export default function Weather() {

    const [city, setCity] = useState("Mumbai")

    const [search, setSearch] = useState("Mumbai")
    useEffect(() => {
        const fetchWeather = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6cbac7aff8c1b6b59caf5e560d50f464`
            const response = await fetch(url);
            const responjosn = await response.json();
            setCity(responjosn.main);

        }
        fetchWeather();

    }, [search])

    return (
        <>
            <div className='Weather-head'>
                <h1 > Weather App</h1>
            </div>
            <div className='Input-box'>

                <input
                    type='text'
                    placeholder='Enter any city name'
                    className='input'
                    id='input'
                    onChange={(event) => { setSearch(event.target.value) }}></input>
            </div>

            {
                !city ?
                    (<p>no data found</p>) : (

                        <>
                            <div className='show-result-box'>
                                <h1 id='temprature'>{city.temp}</h1>
                                <h2 id='city_name'>{search}</h2>
                            </div>

                            <div className="extra-detail">
                                <div className="humidity">
                                    <h1 id='Humidity-detail'> 50%</h1>
                                    <h3 id='humi-tex'>Humidity</h3>
                                </div>
                                <div className="wind-speed">
                                    <h1 id='wind-detail'> 50%</h1>
                                    <h3 id='speed-tex'>Wind Speed</h3>
                                </div>
                            </div>

                        </>




                    )
            }


        </>
    )
}




