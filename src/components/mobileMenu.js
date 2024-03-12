import { Link } from "react-router-dom";

const MobileMenu = ({isOpen}) => {
    // 
    
    return ( 
        <ul className={`md:hidden bg-slate-300 fixed duration-[1s] flex flex-col z-50 h-screen w-[85%] text-2xl p-14 gap-10 top-0 ${isOpen ? ' left-0  ':'left-[-100vw]'}`}>
        <li className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><Link to="/">Homehhh</Link></li>
        <li className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><Link to="/products">Products</Link></li>
        <li className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><Link to="">About Us</Link></li>
        <li className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><a href="">Contact</a></li>
        <li className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><a href="">Blog</a></li>
    </ul>
     );
}
 
export default MobileMenu;