import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export default function InfoBox({result}){
    let rain_url = "https://images.unsplash.com/photo-1513172128806-2d00531a9f20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55fGVufDB8fDB8fHww";
    let sun_url = "https://images.unsplash.com/photo-1612863229236-60722f5ef8c9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_url = "https://plus.unsplash.com/premium_photo-1675791930245-a94ea3edcaea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGR8ZW58MHx8MHx8fDA%3D";

    let weatherIcon;
    if (result.humidity > 90) {
        weatherIcon = <UmbrellaIcon style={{ marginRight: '8px' }} />;
    } else if (result.temp < 15) {
        weatherIcon = <AcUnitIcon style={{ marginRight: '8px' }} />;
    } else {
        weatherIcon = <WbSunnyIcon style={{ marginRight: '8px' }} />;
    }

    return (
        <div className="card">
            <Card sx={{ maxWidth: 400 , width:'100%' , height:470}} className="card_content">
            <CardMedia
            sx={{ height: 190 }}
            image= {result.humidity >90 ? rain_url : result.temp<15 ? cold_url : sun_url}
    
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    City: {result.city} &nbsp;
                    {weatherIcon}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <p>Temperature: {result.temp}°C </p>
                <p>Min Temp: {result.tempMin}°C</p>
                <p>Max Temp: {result.tempMax}°C</p>
                <p>Humidity: {result.humidity}</p>
                <p>Feels Like: {result.feelsLike}</p>
                <p>Weather: {result.weather}</p>
                </Typography>
            </CardContent>
            </Card> 
        </div> 
    )
}