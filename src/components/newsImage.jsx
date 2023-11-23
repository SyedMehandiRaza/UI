import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cafe from '../image/N1.png';
import Space from '../image/N2.png';
import Third from '../image/N3.png';

function NewsImage() {
  return (
    <div className='newsImage'>
    <div className='imagenews'>
    <img src={Cafe} />
    <br /><span>
      
    White Architectures work was mentioned as best in one of the spacious interior as well clean design in UNI . COS Magazine of the year 2020.
      <br />
      <br />
      <span>
      __________20 June 2020
      </span>
    </span>
    </div>
    <div className='imagenews'>
    <img src={Space} />
    <br />
    <span>
    D&D Magzine 2020 added an article on our workof "Space and Light"saying about the design trend that we are setting out there.
    <br />
    <br />
    <span>
      __________12 March 2020
    </span>
    </span>
    </div>
    <div className='imagenews'>
      <img src={Third} />
      <br />
   <span>
   D&D Magzine 2020 added an article on our workof "Space and Light"saying about the design trend that we are setting out there.
    <br />
    <br />
    <span>
      ___________12 March 2020
    </span>
   </span>
      </div>
    </div>
    
  );
}

export default NewsImage;