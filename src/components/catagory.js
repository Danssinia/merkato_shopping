import { Link } from "react-router-dom";
import arrays from "./array";
import { useContext, useState } from "react";
import { catagoryContext } from "../context/catagoryContext";

const Catagory = () => {
  const { setCatagory, catagory } = useContext(catagoryContext);
  const [subItem, setSubItem] = useState(arrays[0].subItems);

  const handleSelect = (subItem, itemId, catagory) => {
    setCatagory(catagory);
    localStorage.setItem("catagory", catagory);

    setSubItem(subItem);
    ColorChanger(itemId);
  };
  const [color, setColor] = useState(1);

  const ColorChanger = (arrayId) => {
    setColor(arrayId);
  };

  return (
    <div className="max-w-[90%] m-auto">
      <div className="max-sm:grid  max-sm:grid-cols-2 max-sm:gap-0 relative grid grid-cols-6 border   font-bold border-slate-300  mt-20 ">
        {arrays.map((array) => (
          <div
            key={array.id}
            onClick={() =>
              handleSelect(array.subItems, array.id, array.catagory)
            }
            className={`h-full flex flex-col justify-center items-center cursor-pointer border-r max-sm:border-none  border-slate-200 ${
              color === array.id ? "bg-[#51AA1B]" : "bg-white"
            }`}
          >
            <p className="flex justify-center w-[200px] h-[120px] object-contain items-center">
              <img src={array.image} alt="" width={50} />
            </p>
            <p className="flex justify-center items-center">{array.catagory}</p>
            <p className="flex mb-4 font-normal text-xs justify-center items-center">
              {array.items}{" "}
            </p>
          </div>
        ))}
      </div>

      {/*code for the sub item*/}
      {subItem.length > 0 && (
        <div className="max-sm:flex max-sm:overflow-x-scroll grid grid-cols-6 font-semibold">
          {subItem.map((subItem) => (
            <div key={subItem.id} className="max-sm:shrink-0">
              <Link to={`/merkato/details/${subItem.id}`}>
                <p className="flex mt-8 justify-center items-center">
                  <img src={subItem.image} width={130} alt="" />
                </p>
                <p className="flex justify-center items-center">
                  {subItem.name}
                </p>
                <p className="flex justify-end text-[#83B735]">
                  {subItem.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catagory;
