import SocialIcons from "./social";
import { BsTruck } from "react-icons/bs";
import { TiWorld } from "react-icons/ti";

const Header = () => {
    return ( 
        <div className="bg-[#51AA1B] max-sm:hidden p-2 w-full flex px-16 justify-between">
            
            <ul className="flex gap-4 text-white text-sm">
                <li><BsTruck className="inline mr-3" size={20} />Free Delivery</li>
                <li>|</li>
                <li><TiWorld className="inline mr-3" size={20} />Returns Policy</li>
                <li>|</li>
                <li><SocialIcons /></li>
                
            </ul>
            
            <div>
                <button className="text-white">login</button>
            </div>
            
        </div>
     );
}
 
export default Header;
