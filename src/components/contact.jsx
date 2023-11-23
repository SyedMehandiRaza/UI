import cu1 from '../image/CU1.png';
import cu2 from '../image/CU2.png';
import cu3 from '../image/CU3.png';

export default function Contact() {
  return(
    <div>
      <div className="border-radius"></div>
      <div className="about color">Contact us</div>
      <div className="contact-place">
       <center> <img src={cu1}  /></center>
        <div className='address'><p>White Architectures</p><p>2787 Street, Fremont</p>
        <p>California</p>
        <p>94538</p></div>
      </div>
      <div className="contact-place">
       <center> <img src={cu2}  /></center>
        <div className='address'><p>wegetintouch@whitearch.com</p></div>
      </div>
      <div className="contact-place">
       <center> <img src={cu3}  /></center>
        <div className='address'><p>999-777-0000</p></div>
      </div>
    </div>
  )
}