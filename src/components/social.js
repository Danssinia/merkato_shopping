import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const SocialIcons = () => {
    return ( 
        <div>
             <div className="flex gap-2 items-center">
               <h1>Follow Us</h1>
            <a href=""><FaFacebookF className="hover:text-blue-800"/></a>
            <a href=""><FaXTwitter className="hover:text-black"/></a>
            <a href=""><FaInstagram className="hover:text-[#C62244]" /></a>
            <a href=""><FaTelegram className="hover:text-[#1f4665]"/></a>
        </div>
        </div> 
     );
}
 
export default SocialIcons;