import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState(
        {
            city:"WonderLand",
            fealsLike: 26.69,
            temp: 25.62,
            tempMax: 26.05,
            tempMin: 25.62,
            weather: "mist"
        }
    );
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return (
        <div className="mainDiv">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}