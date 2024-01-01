import { FaMoon  } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { useState } from "react";
export default function DarkModebtn() {
    const [darkClass , setDarkClass] = useState<boolean>(false);
 
    function handleToggleThem() {
        document.documentElement.classList.toggle("dark");
            {document.documentElement.classList.contains("dark") ? setDarkClass(true) :  setDarkClass(false)}
    }
    return(
        <button onClick={handleToggleThem} className={`${darkClass ? "bg-yellow px-1 ": "bg-custom_brown px-2"} inline-block fixed top-1/2  py-2 rounded-full`}>
          <div className="flex justify-center items-center transition-all">
            {/* <span>{darkClass ? 'light' : 'dark'}</span> */}
            <span className=" transition-all hover:scale-125 mx-2">{darkClass ? <WiDaySunny  fontSize="25px"/>: <FaMoon fontSize="20px"/>}</span>
            
          </div>
        </button>

    )
}