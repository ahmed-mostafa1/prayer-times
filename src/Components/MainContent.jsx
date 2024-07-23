import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Prayer from './Prayer';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function MainContent() {
  const [timing, setTimig] = useState({
    Fajr: "04:28",
    Dhuhr: "13:01",
    Asr: "16:38",
    Maghrib: "19:54",
    Isha: "21:23"
    })
  const GetTiming = async () => {
    const res = await axios.get(
      'http://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=5'
    )
    setTimig(res.data.data.timings)
  }
  useEffect(() => {
    GetTiming()
  })
  // Change City
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      {/* Title  */}
      <Grid container style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px',
        width: '100%',
        margin: '5px',
      }}>
        <Grid xs={6}>
          <h2>مكة المكرمة</h2>
          <h4>20/1/2024 6:23 PM</h4>
        </Grid>
        <Grid xs={6}>
          <h3>المتبقي على صلاة المغرب</h3>
          <h3>01:22 </h3>
        </Grid>
      </Grid>
      {/* Selct City */}
      <Stack direction={"row"} spacing={3} style={{ justifyContent: "center" }}>
        <FormControl style={{ width: "30%", marginBottom: "10px", justifyContent: "center" }}>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={name}
            label="City"
            onChange={handleChange}
          >
            <MenuItem value="cairo">Cairo</MenuItem>
            <MenuItem value="alex">Alex</MenuItem>
            <MenuItem value="aswan">Aswan</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Divider style={{ borderColor: "black", marginBottom: "10px" }} />
      {/* Prayers Info */}
      <Stack direction={"row"} spacing={3}>
        <Prayer name="الفجر" time={timing.Fajr} image="https://placehold.co/200x300" ></Prayer>
        <Prayer name="الظهر" time={timing.Dhuhr} image="https://placehold.co/200x300" ></Prayer>
        <Prayer name="العصر" time={timing.Asr} image="https://placehold.co/200x300" ></Prayer>
        <Prayer name="المغرب" time={timing.Maghrib} image="https://placehold.co/200x300" ></Prayer>
        <Prayer name="العشاء" time={timing.Isha} image="https://placehold.co/200x300" ></Prayer>
      </Stack>
    </>
  )
}
