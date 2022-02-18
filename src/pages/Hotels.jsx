import React from "react";
import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";

export default function Hotels() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div>
      <Navbar />
     
      <container>
        <img
          src="https://images.unsplash.com/photo-1616064959886-a500e5c38e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          style={{ width: "100%", height: "550px", objectFit: "fill" }}
        ></img>
      </container>
      <h2 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>Enter your dates</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
      </div>
      
        {/* <Footer/> */}
      
    </div>
  );
}
