import axios from 'axios';
import React, { useState } from 'react'
import { api } from '../constants/ApiConstants';
import "./../assets/css/Weather.css";

export  function Weather() {

    const [weather,setWeather] = useState(undefined)
    const [loading,setLoading] = useState(false);

    function getWeatherInfo(selectedCity){
        setLoading(true)
        axios({
            url: `${api.base}/forecast?q=${selectedCity}&units=metric&APPID=${api.key}`,
            method: 'GET'
        })
            .then(res => {
                setWeather(res.data)
                setLoading(false)
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <div className="local-weather">
              <br />
                <div className="header_buttons">
                    <button onClick={() => { getWeatherInfo("Skopje") }} className={`cityButton`}>
                        Skopje
                    </button>
                    <button onClick={() => { getWeatherInfo("Tetovo") }} className={`cityButton`}>
                        Tetovo
                    </button>
                    <button onClick={() => { getWeatherInfo("Veles") }} className={`cityButton`}>
                        Veles
                    </button>
                    <button onClick={() => { getWeatherInfo("Debar") }} className={`cityButton`}>
                        Debar
                    </button>
                    <button onClick={() => { getWeatherInfo("Bitola") }} className={`cityButton`}>
                        Bitola
                    </button>
                    <button onClick={() => { getWeatherInfo("Gostivar") }} className={`cityButton`}>
                        Gostivar
                    </button>
                    <button onClick={() => { getWeatherInfo("Mavrovo") }} className={`cityButton`}>
                        Mavrovo
                    </button>
                    <div className="local-container">
                    {weather && loading === false && weather.list.map((w, i) => {
                        return (
                            <div key={w.dt_txt} className="card" >
                                <div className="location-box">
                                    <div className="location">
                                        {weather.city.name}, {weather.city.country}
                                    </div>
                                    <div className="date">
                                        {w.dt_txt}
                                    </div>
                                </div>
                                <div className="weather-box">
                                    <div className="temp">
                                        {Math.round(w.main.temp)}°c
                        </div>
                                    <div className="weather">
                                        {w.weather[0].main}
                                    </div>
                                </div>
                            </div>
                        )
                    })


                    }
                    {loading && <div className="loader"></div>}
                    </div>
                </div>
        </div>
    )
}
