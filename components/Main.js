 import React from 'react'
import './MainStyle.css';
import videoBg from '../assets/videoBg.mp4'
import Typewriter from 'typewriter-effect'
import FadeIn from 'react-fade-in';
export default function Main(){
  return(
    <>
    <FadeIn transitionDuration={2000} delay={100}>
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay muted loop/>
      <div className="content">
        <h2>Hi  <span style={{color:"orange"}}> I'm</span>
      </h2>
        <span className="my-3" style={{color:"white",fontSize:"1.8rem",marginBottom:"20px",fontWeight:"bold",letterSpacing:"2px"}}>
        <Typewriter
       options={{
         autoStart:true,
         loop:true,
         delay:40,
         strings:[
          "Karthikeyan V V ",
          "Full Stack Developer ",
          "Free Lancer "
         ]
       }
       }
        
         

        />

      </span>
          
        <div className="container text-center my-3">
          <button className="btn btn-info mx-4">Hire me</button>
          <button className="btn btn-success"> Download CV</button>
        </div>
      </div>
      </div>
      </FadeIn>
    </>
  )
}