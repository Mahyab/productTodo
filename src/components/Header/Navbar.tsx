
 
 import {FaAlignCenter} from  "react-icons/fa";
 import { IconContext } from "react-icons";
 function Navbar() {
    return(
        <nav className="navigation flex  relative bg-custom_brown text-black">
            <a className="brand-name  text-black ml-2 no-underline">
                Mahya
            </a>
            <button className="hamburget-icon hidden border-0 h-2/5 p-2 rounded-full cursor-pointer absolute top-1/2 right-1/4   hover:text-custom_cerem">
                <IconContext.Provider value={{className:"hover:text-custom_blue"}}>
                <FaAlignCenter />

                </IconContext.Provider>
            </button>
            <div className="nanigation-menu ml-auto">
              
                <ul className="flex p-0 list-none my-0 mx-4">
                {[
                    ["Products" , "/products"],
                    ["lorem1" , "/lorem1"],
                    ["lorem2" , "/lorem2"],
                    ["lorem3", "/lorem4"]
                ].map(([title , url]) =>(
                    <li  className="list-none my-0 mx-4 ">
                        <a href={url} className="no-underline block w-full">{title}</a>
                    </li>
                ))}
                    <li className="list-none my-0 mx-4  ">
                        <button className="p-2 border-custom_blue border bg-custom_blue hover:bg-custom_brown hover:text-custom_blue hover:border-custom_blue hover:border" style={{marginTop:"-6px"}}>Language</button>
                    </li>
                    
                </ul>

            </div>
            
        </nav>

    )
}
export default Navbar