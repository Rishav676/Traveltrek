import React ,{useState} from "react";
import Navbar from "../components/Navbar";
import {Button, Card, CardImg} from "react-bootstrap"
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import SearchHotels from "../components/SearchHotels";
import "./Hotels.css";
import CircularProgress from "@mui/material/CircularProgress";
import { photos } from "../images/photos";
export default function Hotels() {
  
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const search = (searchValue) => {
    
    setLoading(true);
  
   
      //getApiURL(searchValue)
      fetch(`https://hotels4.p.rapidapi.com/locations/v2/search?query=${searchValue}&locale=en_US&currency=USD`,{
        method:'GET',
        headers:{'x-rapidapi-host':'hotels4.p.rapidapi.com', 'x-rapidapi-key':'9c25c9e93emshf418f7fdd47c11dp16e597jsn17ae3a9959c9'},
        body: JSON.stringify()
      })
      .then((response) => response.json())
      .then((res) => {
        console.log(res.suggestions[1]);
       console.log(res.suggestions[1].entities.name);
         setLoading(false);
        setMovies(res.suggestions[1].entities);
        
      })
  
  
};



  return (
    <div>
      <Navbar />

      <container>
        <img
          src="https://images.unsplash.com/photo-1616064959886-a500e5c38e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          style={{ width: "100%", height: "550px", objectFit: "fill" }}
        ></img> 
        <SearchHotels search={search} />
      </container>
      <div className="Hotels">
      
    
      <div className="movies">
        {loading ? (
          <div style={{ paddingLeft: "50%", paddingTop: "10rem" }}>
            <Box sx={{ display: "flex" }}>
              <CircularProgress color="primary" />
            </Box>
          </div>
        ) : (
          movies.map((movie, index) => (
        
            <Card
              style={{
                width: "20rem",
                height:"30rem",
                margin:"auto",
                
              }}
            >
             <CardImg height={"200rem"} src={photos[index].src}>
               
             </CardImg> 
              <Card.Body style={{ color: "gray" }}>
                <Card.Title as="h3" style={{ color: "black" }}>{movie.name}</Card.Title>
                <Card.Text>{movie.caption}</Card.Text>
                <Button style={{backgroundColor:"#00c2c2"}}>Book your Hotel</Button>
              </Card.Body>
            </Card>
          ))
        )}
      
      </div>
      </div>
      
      
      <Footer />
    </div>
  );
}
