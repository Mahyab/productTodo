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
        <button onClick={handleToggleThem} className={`${darkClass ? "bg-custom_orange px-1 ": "bg-custom_brown px-2"} inline-block fixed top-1/2  py-2`}>
          <div className="flex justify-center items-center">
            <span>DARK</span>
            {darkClass ? <WiDaySunny fontSize="25px"/>: <FaMoon fontSize="20px"/>}
          </div>
        </button>

    )
}