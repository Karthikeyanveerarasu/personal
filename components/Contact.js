import { Container,Row,Col } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Contact.css'
const logo="https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=600";
 const Contact =()=>{
  return(
    <div className="my-4">
      <Container>
        <Row>
           <Col md={6}>
           <div className="text-center my-5" >
                <h5 className="display-6"> Send us a Message</h5>     
             </div>
           <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Name">
        <Form.Control type="Name" placeholder="name"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mt-3">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <div className="text-center mt-5">
<button className="btn btn-primary">Send Email <span style={{fontSize:"1.2rem",fontWeight:"bold"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></span></button>
      </div>
      
           </Col>
           <Col md={6}>
                       

           </Col>
        </Row>
      </Container>

    </div>
  );
}
export default Contact;
