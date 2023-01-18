import { Card } from 'react-bootstrap';
import './Work.css';
import React, { useState } from 'react';
import  { Modal } from 'react-bootstrap';

function Wok(props) {
  const [fullscreen, setFullscreen] = useState(false);
  const [show, setShow] = useState(false); 
   function handleClick(){
    setShow(true);
    setFullscreen(true);
  }
  return (
    <div>
    <>
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
          <div className="text-uppercase text-warning " style={{letterSpacing:"2px"}}>{props.title}</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center my-5">
            <h3 >Stay Tuned, Works on Progress <span> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
</svg></span></h3>
          </div>
        </Modal.Body>
      </Modal></>
      <>
    <Card className='m-3'>
      <Card.Img variant="top" src={props.img} className='img' />
      <Card.Body>
      <div className='text-center'>
      <Card.Title> <h4 className="text-success">{props.title}</h4></Card.Title>
      </div>
      <Card.Text className="pro">
        {props.content}
      </Card.Text>
      <div className='text-center'>
     <a class="anchor" onClick={handleClick}>view more</a>
      </div>
      </Card.Body>
    </Card></>
    </div>
  );
}

export default Wok;
