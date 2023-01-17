import {Container,Row,Col,ProgressBar} from 'react-bootstrap';
import Fade from 'react-reveal/Fade'
import './AppStyle.css';
const img="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
export default function Skill() {
  return (
    <section id="#skill">
    <Fade bottom>
    <Container>
      <Row  className="justify-content-md-center my-4">
        <Col  xs={0} lg={6} className="my-3">
        <img src={img} alt="profile" class="img-fluid"/>
        </Col>
        <Col sm={12} xs={12} lg={6}>
          <div className="my-3">
          <h6 className="display-6 my-3" style={{fontWeight:"bold",letterSpacing:"2px"}}> My Bio</h6>
         <p class="lead" style={{textAlign:"justify"}}>
          I'm  Currently Pursing Computer Science Engineering (3rd Year) in M.Kumarasamy College Of Engineering, Karur .
         <br />
         <br/>
          I'm Interested in Full Stack Development and I have a Good Communication Skills which enhances any Organisation to understand clients need and achieve the goals on Time .
          My Technical Skills are shown below.
         </p>
          </div>
          <div className="my-4">
            <h6 className="text-center">
              HTML
              </h6>
            <ProgressBar 
            variant="danger"
            animated 
            now={90}
            label={`90%`}
            />
            </div>
          <div className="my-4">
            <h6 className="text-center">
              CSS
              </h6>
            <ProgressBar 
            variant="danger"
            animated now={80}
            label={`80%`}
            />
            </div>
          <div className="my-4">
            <h6 className="text-center">
              JAVA
              </h6>
            <ProgressBar 
            variant="danger"
            animated now={80}
            label={`80%`}
            />
            </div>
          <div className="my-4">
            <h6 className="text-center">
              SQL
              </h6>
            <ProgressBar 
            variant="danger"
            animated now={70}
            label={`70%`}
            />
            </div>
          <div className="my-4">
            <h6 className="text-center">
              REACT JS
              </h6>
            <ProgressBar 
            variant="danger"
            animated now={70}
            label={`70%`}
            />
            </div>
          <div className="my-4">
            <h6 className="text-center">
              PYTHON
              </h6>
            <ProgressBar 
            variant="danger"
            animated now={70}
            label={`70%`}
            />
            </div>
          <div className="my-4">
            <h6 className="text-center">
              BOOTSTRAP TOOL
              </h6>
            <ProgressBar 
            variant="danger"
            animated now={90}
            label={`90%`}
            />
            </div>
          </Col>
        </Row>
      </Container>
      </Fade>
      </section>
  );
}
