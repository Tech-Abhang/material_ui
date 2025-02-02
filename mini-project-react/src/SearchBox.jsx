import './SearchBox.css';
import {useState} from "react" ; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchBox(){
    let [city,setCity] = useState("")
    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_keys = "3fe41a9644e004a4253f8b871d502e7d";

    let getWeatherInfo = async () =>{
        let responce = await fetch(`${api_url}?q=${city}&appid=${api_keys}`);
        let jsonResponce = await responce.json();
        console.log(jsonResponce);
        let result ={
            city: city,
            temp: jsonResponce.main.temp,
            tempMin : jsonResponce.main.temp_min,
            tempMax : jsonResponce.main.temp_max,
            humidity : jsonResponce.main.humidity,
            feelsLike : jsonResponce.main.feels_like,
            weather : jsonResponce.weather[0].description,
        }
        console.log(result)
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return (
        <div className="main">
            <h2>Search The Weather</h2>
            <form onSubmit={handleSubmit}>
            <TextField  id="city" label="City" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant = "contained" type='Submit'>Click me</Button >
            </form>
        </div>
    )
}