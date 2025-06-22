import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import React from "react";

export const Header = () => {

    let [btnNameReact, setButtonName ] = useState('Login')

    const onlineStatus = useOnlineStatus();

    const contextData = useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items)
    return (
      <div className="flex z-10 justify-between m-5 shadow-xl relative bg-[#ECECEC]">
        <div className="flex">
          <img  className="w-30" src={LOGO_URL} />
        </div>
        <div className="nav-items mt-8">
          <ul className="flex p-20">
          <li>Online Status :  {onlineStatus === true ? "✅": "🛑"}</li>
          <li className="font-semibold">{contextData.loggedinUser}</li>
            <li>
                <Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">🛒({cartItems.length})</Link></li>
            <li><button className="btn-login bg-amber-500 border-amber-500 border-r-8 font-sans mb-6" onClick={() => {
              btnNameReact === 'Login' ? setButtonName("Logout") : setButtonName("Login")
            }}>{btnNameReact}</button></li>
           
          </ul>
        </div>
      </div>
    );
}

export default Header;