import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import MobileMenu from "./mobileMenu";
const NavBar = () => {

    {/*code for arrow control*/}
    const [isDown,setIsDown] = useState(true);
    const ToogleArrow = () =>{
        setIsDown((prevstate)=>!prevstate)
    }

    {/*code for menu control */}

    const [isOpen,setIsOpen] = useState(false);

    const ToogleMenu = () =>{
        setIsOpen(prevstate=>!prevstate)   
    }

    return ( 
        
        <div className="w-full m-auto border-b border-gray-200">

            {/*Code for the first section of the navbar*/}

            <div className="flex p-4 justify-between">
                <Link to="/"><h1 className="text-3xl font-bold">መርካቶ Shopping</h1></Link>
                <div>
                    <form action="">
                        <div className="max-sm:hidden flex rounded-sm h-10 w-[550px] bg-white pl-2 border-2 border-[#E7E7E7]">
                        <input type="text"   name="" id="" placeholder="Find your product" className="px-16  placeholder:font-bold placeholder:text-sm border-none outline-none" />
                        <select name=""  id="" className=" text-gray-500 text-sm  font-bold border-l-2 cursor-pointer bg-white border-gray-300  pl-2 ">
                        <option value="">All Categories</option>
                        <option value="">Beauty Products</option>
                        <option value="">Foods & Drinks</option>
                        <option value="">Women Clothing</option>
                        <option value="">Mens Clothing</option>
                        <option value="">Fruits</option>
                        <option value="">Vegetables</option>
                        <option value="">Mobile Accessories</option>
                        <option value="">Watch</option>
                        <option value="">Mobile</option>
                        </select>
                        <a href="#" className="flex justify-center items-center bg-[#51AA1B] pl-2 pr-4 w-full"><FaSearch />
                        </a>
                        </div>
                    </form>
                    
                </div>

                <div className="flex gap-4">
                    <p className="relative"><a href="#"><FaRegHeart size={35}/><span className="absolute flex justify-center items-center bottom-7 left-7  rounded-full h-3 w-3 bg-[#F0F0F0]">0</span></a></p>
                    <p className="relative"><a href=""><HiOutlineShoppingBag size={35}/><span className="absolute flex justify-center items-center bottom-7 left-7 h-3 w-3 rounded-full">0</span></a></p>
                    <p onClick={ToogleMenu} className="hidden z-50 max-sm:block cursor-pointer">{isOpen ? <IoIosCloseCircleOutline size={35}/>:<HiOutlineMenu size={35}/>}</p>
                </div>
            </div>


            {/*Code for the second section of the navbar*/}

            <div className="flex justify-between items-center p-4">
            <div className="max-sm:hidden relative w-[240px] z-10  bg-black">
                <h1 onClick={ToogleArrow} className="flex justify-center text-white items-center gap-2 w-full h-12 bg-[#51AA1B] font-bold cursor-pointer"><IoMdMenu size={30} /> All Categories{isDown ?<IoIosArrowDown size={30}/>:<IoIosArrowUp size={30} />}</h1>
                    <ul className={`${isDown ? 'hidden': 'absolute bg-gray-200  w-full  top-12'}`}>
                    <li className="border-b py-2 px-6 border-gray-400">Electronics</li>
                    <li className="border-b py-2 px-6 border-gray-400">Men's Fashion</li>
                    <li className="border-b py-2 px-6 border-gray-400">Women's Fashion</li>
                    <li className="border-b py-2 px-6 border-gray-400">Office & Security</li>
                    <li className="border-b py-2 px-6 border-gray-400">Camera</li>
                    <li className="border-b py-2 px-6 border-gray-400">Drone</li>
                    <li className="border-b py-2 px-6 border-gray-400">Gamepad</li>
                    <li className="border-b py-2 px-6 border-gray-400">Mobile</li>
                    <li className="border-b py-2 px-6 border-gray-400">Speaker</li>
                   </ul> 
                </div>

               {/* className={`lg:flex lg:gap-14 ${isOpen ? 'flex flex-col z-50 bg-slate-300 w-[85%] h-screen text-2xl fixed left-0 p-14 gap-10 right-10 top-0 duration-[1s]':'left-[-100vw] duration-[1s]'}`} */}

                <ul className={`lg:flex lg:gap-14 duration-[1s] max-sm:bg-slate-300 max-sm:flex max-sm:flex-col max-sm:text-2xl max-sm:p-14 max-sm:gap-10 max-sm:z-50 max-sm:w-[80%] max-sm:fixed max-sm:top-0 max-sm:h-screen ${isOpen ? '   left-0   ':'max-sm:p-14 max-sm:gap-10 left-[-100vw] '}`}>
                    <li onClick={ToogleMenu} className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><Link to="/">Home</Link></li>
                    <li onClick={ToogleMenu} className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><Link to="/products">Products</Link></li>
                    <li onClick={ToogleMenu} className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><Link to="/About">About Us</Link></li>
                    <li onClick={ToogleMenu} className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><Link to="/contact">Contact</Link></li>
                    <li onClick={ToogleMenu} className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"><Link to="/blog">Blog</Link></li>
                </ul>
                
                <div className={`lg:hidden h-screen w-screen  z-40 fixed top-0  bg-black/50 left-0 ${isOpen ? 'left-0 duration-[0.5s]':'left-[-100vw] ease-in-out duration-[2s]'}`}/>


                <div className="max-sm:hidden relative bg-[#FF6251] ">
                <button className="   px-16 py-1 text-white text-sm font-bold">BLACK FRIDAY <span className="block text-xs">Get 45% Off</span></button>
                </div>
               
            </div>
        </div>
     );
}
 
export default NavBar;