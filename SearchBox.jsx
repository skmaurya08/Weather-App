import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';
export default function SearchBox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="72c7ece71eae39254a3cf53567b04a84";
    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        let result={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            fealsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            humidity: jsonResponse.main.humidity,
        };
        return result;
        }catch(err){
            throw err;
        }
    }
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);  
        }catch(err){
          setError(true);  
        }
    }
    return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city"
             label="City Name"
             variant="filled"
             size="small" required
             value={city}
             onChange={handleChange}
            />
                <br/><br/>
            <Button variant="contained" size="large" type="submit">Search</Button>
            {error &&<p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    );
}