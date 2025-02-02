import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox(){
    let result ={
        city : "delhi",
        temp: 25,
        tempMin : 25,
        tempMax : 25,
        humidity : "fog",
        feelsLike : "haze",
        weather : "foggy",
        };

    return (
        <div className="card">
            <Card sx={{ maxWidth: 400 , width:'100%' , height:470}} className="card_content">
            <CardMedia
            sx={{ height: 190 }}
            image="https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=1024x1024&w=is&k=20&c=FzBhkGLI-zWZ36jW-uKKSeJJcFSNLFJ0b_kWmGlscuk="
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">City: {result.city}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <p>Temperature: {result.temp}°C</p>
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