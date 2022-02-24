
import React from 'react'
import { Navbar, Container, Nav} from "react-bootstrap"



export default function Navbars() {
  return (
    <>
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">Travel Trek</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link fontFamily="Times New Roman" href="/">Home</Nav.Link>
        <Nav.Link href="/planyourtrip">Plan Your Trip</Nav.Link>
        <Nav.Link href="/hotels">Hotels</Nav.Link>
        <Nav.Link href="/flights">Flights</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    
  </>
  )
}


