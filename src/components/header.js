import { useContext, useState } from "react";
import { Link } from "react-router";//with this link what happens is you don't refresh the whole page you refresh the only component which is related to the link to navigate-> it makes the page faster-> this is called single page application
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
    
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const {loggedInUser} = useContext(userContext);

    const cartItems = useSelector ((store) => store.cart.items);
    
    return (
      <div className="header flex justify-between bg-pink-100 shadow-xl">
        <div className="logo-container">
          <img
            className="logo w-50"
            src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-2.5"><Link to="/">Home</Link></li>
            <li className="px-2.5"><Link to="/about">About Us</Link></li>
            <li className="px-2.5"><Link to="/contact">Contact Us</Link></li>
            <li className="px-2.5"><Link to="/grocery">Grocery</Link></li>
            <li className="px-2.5 font-bold"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
            <button className="login" onClick={() =>{btnNameReact=== "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
            }}>{btnNameReact}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

 // export default Header;