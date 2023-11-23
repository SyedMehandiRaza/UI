
import P1 from '../image/P1.jpg';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} className="firstPageimg">
          <Image src={P1} roundedCircle style={{"width":"231px","height":"300px"}} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;