import logo from "../image/Logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div>
      <img src={logo} className="navbar-logo" />
      </div>
      
      <div className="nav-links">
        <div className="nav-links1">Projects</div>
        <div className="nav-links1">About</div>
        <div className="nav-links1">News</div>
        <div className="nav-links1">Services</div>
        <div className="nav-links1">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from React Router
// import logo from '../image/Logo.png';

// function Navbar() {
//   return (
//     <div className="navbar">
//       <div>
//         <img src={logo} alt="Logo" className="navbar-logo" />
//       </div>

//       <div className="navLink-container">
//         {/* Use Link component for navigation */}
//         <Link to="/projects" className="nav-links">
//           Projects
//         </Link>
//         <Link to="/about" className="nav-links">
//           About
//         </Link>
//         <Link to="/news" className="nav-links">
//           News
//         </Link>
//         <Link to="/services" className="nav-links">
//           Services
//         </Link>
//         <Link to="/contact" className="nav-links">
//           Contact
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

