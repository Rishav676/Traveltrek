import React,{ useState, useCallback } from "react";
import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { Row, Col } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import { Modal, ModalGateway } from "react-images";
import { photos } from "../images/photos";

import { Container } from "@mui/material";
import Footer from "../components/Footer";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  return (
    <div>
    <div>
    
      <Navbar />
      <Carousel style={{ height: "650px" }} fade>
        <Carousel.Item style={{ height: "650px" }}>
          <img className="d-block w-100 h-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "650px" }}>
          <img className="d-block w-100 h-100" src={image1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "650px" }}>
          <img className="d-block w-100 h-100" src="https://images.unsplash.com/photo-1617653202545-931490e8d7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container
        style={{
          paddingTop: "3rem",
          paddingBottom: " 3rem",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <h4 style={{ color: "GrayText" }}>GREAT PLACES TO VISIT</h4>
        <img src={image2} />
        <h5>
          Compellingly embrace empowered e-business after user friendly
          intellectual capital. Interactively actualize front-end processes with
          effective convergence.
        </h5>
      </Container>

      <Row xs={1} md={5} style={{ margin: "auto" }} className="g-4">
        <Col>
          <Card style={{boxShadow:"20"}}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160"
            />
            <Card.Body style={{ backgroundColor: "#ff3e89" }}>
              <Card.Title>Delhi</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60/100px160"
            />
            <Card.Body>
              <Card.Title>Mumbai</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body style={{ backgroundColor: "#ff5757" }}>
              <Card.Title>Jaipur</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1625317201684-b5ab0b282552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNoaW1sYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Shimla</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1592726129893-0b0ff79c8a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVubmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Munnar</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1617653202545-931490e8d7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Andaman & Nicobar</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1575994532957-773da2f83eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dWRhaXB1cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body style={{ backgroundColor: "#ffbd59" }}>
              <Card.Title>Udaipur</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1612099452850-ed8efe7d58ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25vdyUyMG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Kashmir</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Goa</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              style={{ objectFit: "cover" }}
              variant="top"
              src="https://images.unsplash.com/photo-1566560073340-0ee82cb29074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGVofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body style={{ backgroundColor: "#5ce1e6" }}>
              <Card.Title>Leh</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Box
        sx={{
          height: 25,
          backgroundColor: "inherit",
        }}
      />
      <Box
        sx={{
          width: 1300,
          height: 170,
          margin: "auto",
          borderRadius: 30,
          padding: 5,
          boxShadow: 20,
          paddingTop: 5,
          backgroundColor: "#D3D3D3",
        }}
      >
        <h1
          style={{
            fontFamily: "Times New Roman",
            paddingLeft: "14%",
            paddingTop: "1rem",
          }}
        >
          Travel is the only thing you buy that makes you richer
        </h1>
      </Box>
      <Box
        sx={{
          height: 25,
          backgroundColor: "inherit",
        }}
      />

      <Row xs={1} md={4} style={{ margin: "auto" }} className="g-4">
        <Col>
          <Card style={{height:"300px"}}>
            <Card.Img
            style={{height:"300px"}}
              variant="top"
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160"
            />
            
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            
          </Card>
        </Col>
        <Col>
          <Card style={{height:"300px"}}>
            <Card.Img
              style={{height:"300px"}}
              variant="top"
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160"
            />
            
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                
              </Card.ImgOverlay>
            
          </Card>
        </Col>
        <Col>
          <Card style={{height:"300px"}} >
            <Card.Img
              style={{height:"300px"}}
              variant="top"
              src={image3} />
            
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                
              </Card.ImgOverlay>
            
          </Card>
        </Col>
        <Col>
          <Card style={{height:"300px"}}>
            <Card.Img
              style={{height:"300px"}}
              variant="top"
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60/100px160"
            />
            
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                
              </Card.ImgOverlay>
            
          </Card>
        </Col>
      </Row>
      <Container
        style={{
          paddingTop: "3rem",
          paddingBottom: " 3rem",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <h4 style={{ color: "GrayText" }}>YOUR KIND OF HOLIDAY</h4>
        <img src={image4} />
        <h6 style={{ color: "GrayText" }}>
        Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.
        </h6>
        
      </Container>
      </div>
      <div>
      <Container
        style={{
          paddingTop: "1rem",
          
          fontFamily: "Cosmic",
          textAlign: "center",
        }}
      >
       
        <h1>Photo Gallery</h1>
      </Container>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>
      <div>
      <Footer/>
    </div> 
      
    </div>
    
  );
};
export default Home;
