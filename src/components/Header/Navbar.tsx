
 
 import {FaAlignCenter} from  "react-icons/fa";
 import { FaTimes } from "react-icons/fa";
 import { IconContext } from "react-icons";
 import LOGO from "../../assets/logo.png"
import { useEffect, useRef, useState } from "react";
 function Navbar() {
    const [isNavbarExpaned , setIsNavbarExpanded] = useState(false);
    const menuRef = useRef();
    useEffect(() => {
        
    })
    function handleNavbarOpened() {
        setIsNavbarExpanded(!isNavbarExpaned);
    }
    return(
        <nav className="navigation flex justify-start items-center relative bg-custom_brown text-black">
            <a className="brand-name  text-black ml-2 no-underline" href="#">
                <img src={LOGO} alt="the logo" width={100} />
            </a>
            <button onClick={handleNavbarOpened} className={`hamburget-icon lg:hidden md:block md:top-0 border-0 h-2/5  rounded-full cursor-pointer absolute top-1/2 right-4   hover:text-custom_cerem`}>
                <IconContext.Provider value={{className:"hover:text-custom_blue text-2xl" }}>
               {isNavbarExpaned ?  <FaTimes/>:<FaAlignCenter />} 
                </IconContext.Provider>
            </button>
            <div className=" ml-auto">
                <ul ref={menuRef}  className={`${isNavbarExpaned ?  "opacity-100  visible cus-navbar-transition ":"opacity-0 invisible cus-navbar-transition" } lg:visible lg:opacity-100 flex-wrap flex lg:flex-row lg:top-auto mx-0 lg:items-center lg:w-auto lg:static lg:bg-custom_brown  p-0 list-none my-0  absolute top-12 left-0 flex-col w-full bg-custom_cerem text-custom_blue border-2 lg:border-0`}>
                {[
                    ["Products" , "/products"],
                    ["lorem1" , "/lorem1"],
                    ["lorem2" , "/lorem2"],
                    ["lorem3", "/lorem4"],
                    ["lorem5" , "/lorem5"],
                    
                ].map(([title , url]) =>(
                    <li key={title}  className={` list-none my-0 mx-4`}>
                        <a href={url} className="no-underline block w-full">{title}</a>
                    </li>
                ))}
                    <li className="list-none my-3 lg:my-0 mx-4 ">
                        <button className="p-2 lg:p-1 border-custom_blue lg:text-custom_cerem   border lg:bg-custom_blue bg-custom_brown hover:bg-custom_brown    hover:text-custom_blue hover:border-custom_blue hover:border" style={{marginTop:"-6px"}}>Language</button>
                    </li>
                    
                </ul>
            </div>
            
        </nav>

    )
}
export default Navbar