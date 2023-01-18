import { Parallax} from 'react-parallax'
import photo from '../assets/karthi.jpg'
import React from 'react'
import lo from '../assets/logo.png'
import './MainStyle.css';
import Typewriter from 'typewriter-effect'
import  {Container }from 'react-bootstrap';
import  {Nav } from 'react-bootstrap';
import {Navbar }from 'react-bootstrap'
import RubberBand from 'react-reveal/RubberBand';
export default function AppBar(){
  return(
    <div>
     <Navbar bg="dark" expand="lg" fixed="top" style={{width:"95%",margin:"auto",borderRadius:"30px",marginTop:"10px"}}>
      <Container>
        <Navbar.Brand href="#home">
          <div>
          <h3 style={{color:"wheat",letterSpacing:"2px"}}>Kar<span style={{color:"red"}}>thi</span></h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className='justify-content-end'>
          <Nav className="nav" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section id="home">
    <Parallax bgImage={photo} strength={300}>
           <div className="overlay"></div>
           <div className="overlay"></div>       
           <div className="overlay"></div>       
       <div style={{height:"100vh"}}>
       
       <div className="content">
        <RubberBand count={3}>
        <h2 style={{letterSpacing:"2px"}}>Hi  <span style={{color:"orange"}}> I'm</span>
      </h2></RubberBand>
        <span className="my-3" style={{color:"white",fontSize:"1.8rem",marginBottom:"20px",fontWeight:"bold",letterSpacing:"2px"}}>
        <Typewriter
       options={{
         autoStart:true,
         loop:true,
         delay:40,
         strings:[
          "Karthikeyan V V ",
          "Full Stack Developer ",
          "Web Developer",
          "UX/UI Designer",
          "Free Lancer "
         ]
       }
       }
        
         

        />

      </span>
          
        <div className="container text-center my-3">
       <a href={'https://www.linkedin.com/in/karthikeyan-v-v-26b87b244/'} target="blank">   <button className="btn btn-info mx-4">Hire me</button></a>
       <a href={'./assets/Resume.pdf'} download>   <button className="btn btn-success"> Download CV</button>
       </a> </div>
      </div>
       </div>
    </Parallax>
    </section>
    </div>
  )
}
