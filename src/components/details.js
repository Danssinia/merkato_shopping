import { Link, useParams } from "react-router-dom";
import arrays from "./array";
import { useContext, useEffect, useState } from "react";
import { catagoryContext } from "../context/catagoryContext";
import { CiHeart } from "react-icons/ci";
export const Deatils = () => {
  useEffect(() => {
    // Set the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  {
    /*code for fetching the related products*/
  }
  const { catagory } = useContext(catagoryContext);

  
  const related = arrays.filter((array) => array.catagory === catagory)[0]
    .subItems;
  {
    /*code for button increament*/
  }
  const [counter, setCounter] = useState(1);
  const increament = () => {
    setCounter((prevstate) => prevstate + 1);
  };

  const decreament = () => {
    setCounter(counter === 1 ? 1 : (prevstate) => prevstate - 1);
  };

  //Find the subitem object with the matching id
  let subItem = null;

  for (const category of arrays) {
    subItem = category.subItems.find((item) => item.id.toString() === id);

    if (subItem) {
      break;
    }
  }

  return (
    <>
      <div className="max-w-[90%] m-auto grid grid-cols-2 mt-20 ">
        <div className="relative">
          <img src={subItem.image} width={540} alt="" />
          <div className="absolute top-10 rounded-full w-16 h-16 flex text-white font-semibold justify-center items-center bg-[#62AB00]">
            sale!
          </div>
        </div>
        <div className="pt-20 font-semibold flex flex-col gap-6 text-2xl">
          <p>{subItem.name}</p>
          <p className="text-[#83B735] text-lg">{subItem.price}</p>

          <div className="flex gap-10">
            <div className="border-2  text-xl grid grid-cols-3 ">
              <button
                onClick={decreament}
                className="px-6 py-2 border-r-2 bg-[#ECECEC]"
              >
                -
              </button>
              <span className="flex justify-center items-center">
                {counter}
              </span>
              <button onClick={increament} className=" border-l-2 bg-[#ECECEC]">
                +
              </button>
            </div>
            <button className="px-12 rounded-sm  text-white font-bold opacity-90 bg-[#51AA1B] text-sm hover:opacity-100">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <p className="max-w-[85%] m-auto text-3xl font-bold mb-10 mt-10">Related Products</p>
      <div className=" max-w-[85%]   m-auto grid grid-cols-3 gap-8">
        {related.map((related) => (
          <Link to={`/details/${related.id}`} onClick={window.scrollTo(0,0)}>
            <div key={related.id} className="group hover:cursor-pointer hover:opacity-70 hover:duration-500 relative shadow-lg hover:shadow-xl border h-[500px] border-slate-300">
            <img src={related.image} width={200}  className="flex justify-center w-full items-center" />
            <p className=" text-xl pt-10 font-bold flex justify-center items-center">{related.name}</p>
            <p className="text-xl font-bold text-[#83b735] flex justify-center items-center">{related.price}</p>
            <span className="hidden group-hover:block  absolute top-5 right-10"><CiHeart size={22}/></span>
            </div>
          </Link>
        ))}
      </div>
      </div>
      
    </>
  );
};

export default Deatils;
