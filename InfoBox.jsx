import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INI_URL="https://images.unsplash.com/photo-1545134969-8debd725b007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL="https://images.unsplash.com/photo-1684846372365-063200593381?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lciUyMHNlYXNvbiUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1670870114363-e016a43e1f76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1687879794744-99e2898cab0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnklMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D";
    return(
    <div className="InfoBox">
        <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>75
            ? RAIN_URL
            :info.temp>15
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>
            <p>Temperature= {info.temp}&deg;</p>
            <p>Min Temp= {info.tempMin}&deg;</p>
            <p>Max Temp= {info.tempMax}&deg;</p>
            <p>Humidity={info.humidity}</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.fealsLike}&deg; </p>
          </div>

        </Typography>
      </CardContent>
    </Card>
        </div>
    </div>
);
}