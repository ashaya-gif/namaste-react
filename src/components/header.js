import { useState } from "react";
import { Link } from "react-router";//with this link what happens is you don't refresh the whole page you refresh the only component which is related to the link to navigate-> it makes the page faster-> this is called single page application

export const Header = () => {
    
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
          />
        </div>
        {/* <div className="aarya">
            <h1>Aarya's Food Page</h1>
        </div> */}
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() =>{btnNameReact=== "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

 // export default Header;