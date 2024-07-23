import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';

export default function Prayer({ name, time , image}) {
  Prayer.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  // const prayers = [
  //   {
  //     id: 1,
  //     name: "الفجر",
  //     time: "4:30",
  //     timeType: "AM"
  //   },
  //   {
  //     id: 2,
  //     name: "الظهر",
  //     time: "12:30",
  //     timeType: "PM"
  //   },
  //   {
  //     id: 3,
  //     name: "العصر",
  //     time: "4:30",
  //     timeType: "AM"
  //   },
  //   {
  //     id: 4,
  //     name: "المغرب",
  //     time: "4:30",
  //     timeType: "AM"
  //   },
  //   {
  //     id: 5,
  //     name: "العشاء",
  //     time: "4:30",
  //     timeType: "AM"
  //   }
  // ]
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {time}          
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

