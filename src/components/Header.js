import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <>
            <div className="flex justify-between items-center bg-amber-200 shadow-lg sm:bg-pink-200 lg:bg-green-200">
                <div className="logo-container">
                    <img className="w-24" src={LOGO_URL}/>
                </div>
                <div className="text-xl font-bold text-red-900">Yummy-Tummy</div>
                <div className="nav-items">
                    <ul className="flex text-md font-bold mr-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                        <li>Cart</li>
                        <button className="login" onClick={()=>{btnNameReact==="Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")}}>{btnNameReact}</button>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;