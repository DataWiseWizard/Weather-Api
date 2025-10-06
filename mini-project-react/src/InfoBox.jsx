import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL= "https://images.unsplash.com/photo-1505440484611-23c171ad6e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 15 
                            ? HOT_URL 
                            : COLD_URL
                        }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 80 
                                ? <ThunderstormIcon/> 
                                : info.temp > 15 
                                ? <WbSunnyIcon/> 
                                : <AcUnitIcon/>
                            }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div>Temperature = {info.temp}&deg;</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Temp Min = {info.tempMin}&deg;</div>
                        <div>Temp Max = {info.tempMax}&deg;</div>
                        <div>The weather can be described as {info.weather} and &nbsp; Feels Like = {info.feelsLike}&deg;</div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}