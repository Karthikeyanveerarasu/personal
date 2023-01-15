import react from 'react';
import { Card } from 'react-bootstrap';
import './Work.css';
function Wok(props) {
  return (
    <Card className='m-3'>
      <Card.Img variant="top" src={props.img} className='img' />
      <Card.Body>
      <div className='text-center'>
      <Card.Title> <h4 className="text-success">{props.title}</h4></Card.Title>
      </div>
      <Card.Text>
        {props.content}
      </Card.Text>
      <div className='text-center'>
     <a href={props.link}>view more</a>
      </div>
      </Card.Body>
    </Card>
  );
}

export default Wok;