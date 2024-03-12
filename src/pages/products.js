import { useState } from "react";
import arrays from "../components/array";
import { CiHeart } from "react-icons/ci";
const Products = () => {
    const[color,setColor]=useState(3)
    const handleColor=(arrayId) =>{
        setColor(arrayId)
    }
    const [subItem,setSubItem] =useState(
        arrays[0].subItems
    )
    
    return ( 
        <div className="max-w-[85%] m-auto  font-semibold mt-10">
            <div className="flex max-sm:flex max-sm:flex-col  justify-between">
                <p className="text-2xl font-bold">All Products</p>
                <div className="max-sm:flex max-sm:gap-3  max-sm:pt-4 flex gap-14">
                {arrays.map(array=>(
                    <div key={array.id}>
                    <p onClick={()=>{
                        handleColor(array.id)
                        setSubItem(array.subItems)
                    }} className={`hover:text-[#51AA1B] max-sm:text-xl duration-300 text-gray-500 text-lg cursor-pointer ${color===array.id ? 'border-b-2 border-[#51AA1B] text-[#51AA1B]':null} `}>{array.market}</p>
                    </div>
                ))}
                </div>
            </div>

            {subItem.length > 0 && 
            <div className="max-sm:flex max-sm:flex-col  grid grid-cols-3 gap-5 mt-20">
                {subItem.map((subItem)=>(
                    <div key={subItem.id}>
                        <div className="group hover:duration-300 hover:opacity-80 relative border border-gray-300 cursor-pointer grid grid-cols-2">
                        <img src={subItem.image} width={130} alt=""/>

                        <div className="m-auto">
                        <p className="text-[20px] font-bold">{subItem.name}</p>
                        <p className="text-[#51AA1B]">{subItem.price}</p>
                        </div>
                        <span className="hidden group-hover:block group-hover:duration-500 absolute top-2 right-4"><CiHeart size={20}/></span>
                        </div>
                    </div>
                ))}
            </div>
            }


        </div>
     );
   
}
 
export default Products;