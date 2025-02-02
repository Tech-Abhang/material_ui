import {useState} from "react" ;
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
export default function Weatherapp(){
    const [weatherInfo,setWeatherInfo] = useState(
        {
            city : "Delhi",
            temp: 25,
            tempMin : 25,
            tempMax : 25,
            humidity : "fog",
            feelsLike : "haze",
            weather : "foggy",
            }
    )    

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign : "center"}}>
            <h2 style={{fontSize : "40px"}}>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox result = {weatherInfo}/>
        </div>
    )
}