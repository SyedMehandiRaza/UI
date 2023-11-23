import Firstpage from './firstpage.jsx';
import Project from './firstpageleft.jsx';
import Line from './firstpageleftline.jsx';
import Navbar from './navbar.jsx';
import './styles.css';


export default function Bg() {
  return(
    <div className='bg-img bg-color'>
      <div className='bg-color'>
      
      <Line />
      <Project />
      <Firstpage />
      
      </div>
    </div>
  )
}