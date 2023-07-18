import React from 'react'

function Show_result() {
    return (
        <>
            <div className='show-result-box'>
                <h1 id='temprature'>22°C</h1>
                <h2 id='city_name'>New York</h2>
            </div>

            <div className="extra-detail">
                <div className="humidity">
                    <h1 id='Humidity-detail'> 50%</h1>
                    <h3 id='humi-tex'>Humidity</h3>
                </div>
                <div className="wind-speed">
                    <h1 id='wind-detail'> 50%</h1>
                    <h3  id='speed-tex'>Wind Speed</h3>
                </div>
            </div>
        </>

    )
}

export default Show_result
