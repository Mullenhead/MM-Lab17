import { Container, Nav, Navbar } from "react-bootstrap";
import {BrouseRouter as Router, Routes, Route} from "react-router-dom"
// import Cookies from "./Cookies.tsx"


export const NavbarBootstrap = () => {
 return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#Cookies">Cookies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  )
}


