import fish from "../images/icons/fish.jpg";
import meat from "../images/icons/meat.jpg"
import orange from "../images/icons/orange.jpg"
const Wishlist = () => {
    return ( 
        <div className="">
          <h1 className="mt-20 lg:mt-48 font-semibold text-2xl pl-9 max-sm:fixed relative  bg-white w-full py-4">My Wishlist</h1>
          <div className="   max-w-[80%] max-sm:flex max-sm:flex-col grid grid-cols-5 m-auto border">
          
          <div className="border-r">
            <p></p>
            <img src={fish} alt="" />
          </div>
          <div className="border-r max-sm:mb-4">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
              Product Name
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              Fish
            </p>
          </div>
          <div className="border-r max-sm:mb-4">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
              Unit Price
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              150 ETB
            </p>
          </div>
          <div className="border-r ">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
              Stock Status
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              In Stock
            </p>
          </div>
          <div>
            <button className="px-6 py-2 mt-20 max-sm:mt-10 max-sm:mb-6 max-sm:ml-[30%] flex justify-center items-center text-white bg-[#51aa1b] rounded-full ml-10">
              Add to cart
            </button>
          </div>
    
          <div className="border-r">
          <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
              
              </p>
            <img src={meat} alt="" />
          </div>
          <div className="border-r max-sm:mb-4">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
              
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              Meat
            </p>
          </div>
          <div className="border-r max-sm:mb-4">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
             
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              500 ETB
            </p>
          </div>
          <div className="border-r ">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
            
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              In Stock
            </p>
          </div>
          <div>
            <button className="px-6 py-2 mt-20 max-sm:mt-10 max-sm:mb-6 max-sm:ml-[30%] flex justify-center items-center text-white bg-[#51aa1b] rounded-full ml-10">
              Add to cart
            </button>
          </div>
    
          <div className="border-r">
          <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
              
              </p>
            <img src={orange} alt="" />
          </div>
          <div className="border-r max-sm:mb-4">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
              
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              Orange
            </p>
          </div>
          <div className="border-r max-sm:mb-4">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
             
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              200 ETB
            </p>
          </div>
          <div className="border-r ">
            <p className="lg:border-b flex flex-col justify-center items-center pt-2 font-bold ">
            
            </p>
            <p className="flex flex-col justify-center items-center max-sm:pt-2 pt-14">
              In Stock
            </p>
          </div>
          <div>
            <button className="px-6 py-2 mt-20 max-sm:mt-10 max-sm:mb-6 max-sm:ml-[30%] flex justify-center items-center text-white bg-[#51aa1b] rounded-full ml-10">
              Add to cart
            </button>
          </div>
        </div>
        </div>
     );
}
 
export default Wishlist;