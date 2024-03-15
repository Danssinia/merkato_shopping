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
import { IoMdCloseCircle } from "react-icons/io";
import fish from "../images/icons/fish.jpg";
const NavBar = () => {
  // code for arrow control*
  const [isDown, setIsDown] = useState(true);
  const ToogleArrow = () => {
    setIsDown((prevstate) => !prevstate);
  };

  // code for menu control

  const [isOpen, setIsOpen] = useState(false);

  const ToogleMenu = () => {
    setIsOpen((prevstate) => !prevstate);
  };


  // code for cart state
  const [isCart,setIsCart] = useState(false); 
  const ToogleCart = () => {
    setIsCart(prevstate=> !prevstate);
  }

  return (
    <div className="relative w-full m-auto border-b border-gray-200">
      {/*Code for the first section of the navbar*/}

      <div className="flex p-4 justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold">መርካቶ Shopping</h1>
        </Link>
        <div>
          <form action="">
            <div className="max-sm:hidden flex rounded-sm h-10 w-[550px] bg-white pl-2 border-2 border-[#E7E7E7]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Find your product"
                className="px-16  placeholder:font-bold placeholder:text-sm border-none outline-none"
              />
              <select
                name=""
                id=""
                className=" text-gray-500 text-sm  font-bold border-l-2 cursor-pointer bg-white border-gray-300  pl-2 "
              >
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
              <p className="flex justify-center items-center bg-[#51AA1B] pl-2 pr-4 w-full">
                <FaSearch />
              </p>
            </div>
          </form>
        </div>

        <div className="flex gap-4">
          <Link to="/wishlist"><p className="relative cursor-pointer">
            <p>
              <FaRegHeart size={35} />
              <span className="absolute flex justify-center items-center bottom-7 left-7  rounded-full h-4 w-4 bg-[#51aa1b] text-white text-[10px]">
                1
              </span>
            </p>
          </p>
          </Link>
          <p onClick={ToogleCart} className="relative">
            <p  className="cursor-pointer">
              <HiOutlineShoppingBag size={35} />
              <span className="absolute flex bg-[#51AA1B] text-white text-[10px] justify-center items-center bottom-7 left-7 h-4 w-4 rounded-full">
                1
              </span>
            </p>
          </p>

          <p
            onClick={ToogleMenu}
            className="hidden z-50 max-sm:block cursor-pointer"
          >
            {isOpen ? (
              <IoIosCloseCircleOutline size={35} />
            ) : (
              <HiOutlineMenu size={35} />
            )}
          </p>
        </div>
      </div>

      {/*Code for the second section of the navbar*/}

      <div className="flex justify-between items-center p-4">
        <div className="max-sm:hidden relative max-lg:w-[25%]   w-[240px] z-10  bg-black">
          <h1
            onClick={ToogleArrow}
            className="flex justify-center text-white items-center gap-2 w-full h-12 bg-[#51AA1B] font-bold cursor-pointer"
          >
            <IoMdMenu size={30} /> All Categories
            {isDown ? <IoIosArrowDown size={30} /> : <IoIosArrowUp size={30} />}
          </h1>
          <ul
            className={`${
              isDown ? "hidden" : "absolute bg-gray-200  w-full  top-12"
            }`}
          >
            <li className="border-b py-2 px-6 border-gray-400">Electronics</li>
            <li className="border-b py-2 px-6 border-gray-400">
              Men's Fashion
            </li>
            <li className="border-b py-2 px-6 border-gray-400">
              Women's Fashion
            </li>
            <li className="border-b py-2 px-6 border-gray-400">
              Office & Security
            </li>
            <li className="border-b py-2 px-6 border-gray-400">Camera</li>
            <li className="border-b py-2 px-6 border-gray-400">Drone</li>
            <li className="border-b py-2 px-6 border-gray-400">Gamepad</li>
            <li className="border-b py-2 px-6 border-gray-400">Mobile</li>
            <li className="border-b py-2 px-6 border-gray-400">Speaker</li>
          </ul>
        </div>

        {/* className={`lg:flex lg:gap-14 ${isOpen ? 'flex flex-col z-50 bg-slate-300 w-[85%] h-screen text-2xl fixed left-0 p-14 gap-10 right-10 top-0 duration-[1s]':'left-[-100vw] duration-[1s]'}`} */}

        <ul
          className={`lg:flex lg:gap-14 md:flex md:gap-3 md:text-xl duration-[1s] max-sm:bg-slate-300 max-sm:flex max-sm:flex-col max-sm:text-2xl max-sm:p-14 max-sm:gap-10 max-sm:z-50 max-sm:w-[80%] max-sm:fixed max-sm:top-0 max-sm:h-screen ${
            isOpen ? "   left-0   " : "max-sm:p-14 max-sm:gap-10 left-[-100vw] "
          }`}
        >
          <li
            onClick={ToogleMenu}
            className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={ToogleMenu}
            className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"
          >
            <Link to="/products">Products</Link>
          </li>
          <li
            onClick={ToogleMenu}
            className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"
          >
            <Link to="/About">About Us</Link>
          </li>
          <li
            onClick={ToogleMenu}
            className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            onClick={ToogleMenu}
            className="flex justify-center max-sm:justify-start hover:text-[#51AA1B] font-semibold hover:duration-300 items-center gap-1"
          >
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div
          className={`lg:hidden h-screen w-screen  z-40 fixed top-0  bg-black/50 left-0 ${
            isOpen
              ? "left-0 duration-[0.5s]"
              : "left-[-100vw] ease-in-out duration-[2s]"
          }`}
        />

        <div className="max-sm:hidden relative bg-[#FF6251] ">
          <button className="max-lg:px-10 px-16 py-1 text-white text-sm font-bold">
            BLACK FRIDAY <span className="block text-xs">Get 45% Off</span>
          </button>
        </div>
      </div>
      {/* code for the cart */}
      {/* {isCart && ()} */}
      <div className={`bg-white w-[350px] duration-700 top-0 h-screen fixed z-50 ease-in-out ${isCart ? ' right-0  ':'duration-500 right-[-100vw]'}  `}>
        <p className="
        text-xl pt-10 font-bold flex justify-around">Shopping Cart<span onClick={ToogleCart} className=" cursor-pointer text-gray-500 hover:text-gray-700 "><IoMdCloseCircle size={30}/></span></p>
        <div className="grid grid-cols-2">
          <img src={fish} alt=""  width={80} className="
          ml-[25%] pt-[10%]"/>
          <p className="flex flex-col justify-center items-center font-bold">Fish <span className="text-[#51AA1B]"> 1 x 150 ETB</span></p>
        </div>
        <p className="flex justify-end pr-10 font-bold">Subtotal: <span className="text-[#51AA1B]">150 ETB</span></p>
        <div className="flex gap-4  pl-14 pt-10">
          <button className="px-8 py-3 bg-[#51AA1B] flex justify-center items-center text-white font-bold text-xs rounded-full">View cart</button>
          <button className="px-8 py-3 bg-[#51AA1B] flex justify-center items-center text-white font-bold text-xs rounded-full">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
