import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bg from './bg';
import SecPage from './2page';
import Services from './services';
import Footer from './Footer';
import Navbar from './navbar';

function RowColLayoutExample() {
  return (
    // <Container >
    //   <Row xs={1} md={2} className='first-page' >
    //     <Col>
    //        <Bg />
    //     </Col>
    //     <Col  className='sec-container'>
    //       <SecPage />
    //     </Col>
    //     <Col className='service-container'>
    //     <Services />
    //     </Col>
    //     <Col>
    //     <Footer />
    //     </Col>
    //   </Row>
    // </Container>
    <>
    
    <Bg />
    <SecPage />
    <Services />
    <Footer />
    </>
  );
}

export default RowColLayoutExample;