import { useState ,useContext, useLayoutEffect } from "react";
import arrays from "../components/array";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FilterContext } from "../context/filterContext";
const Products = () => {
    const {filter,setFilter}=useContext(FilterContext);
    const[color,setColor]=useState(3)
    const [subItem,setSubItem] =useState(
        arrays[0].subItems
    )
    const allItems = arrays.map((v)=>{
        return(
            v.subItems
        )
    }).flat()
    useLayoutEffect(()=>{
        if(filter==="All Categories")
        return setSubItem(allItems)
        const filteredData = arrays.filter((filt)=>filt.id===filter || filt.catagory===filter)
        setSubItem(filteredData[0]?.subItems)
    },[filter])
    const handleColor=(arrayId) =>{
        setColor(arrayId)
    }
    const handleClick = (arrayId,subItem) =>{
        handleColor(arrayId)
        setFilter(arrayId)
       // setSubItem(subItem)
    }
    
    
//code to handle filtering



    return ( 
        <div className="max-w-[85%] m-auto lg:mt-52 font-semibold mt-10">
            <div className="flex max-sm:flex max-sm:flex-col  justify-between">
                <p className={"text-2xl font-bold"} >Products</p>
                
                <div className="max-sm:flex max-sm:gap-3  max-sm:pt-4 flex gap-14">
                {arrays.map(array=>(
                    <div key={array.id}>
                    <p onClick={()=>handleClick(array.id,array.subItems)} className={`hover:text-[#51AA1B] max-sm:text-xl duration-300 text-gray-500 text-lg cursor-pointer ${color===array.id ? 'border-b-2 border-[#51AA1B] text-[#51AA1B]':null} `}>{array.market}</p>
                    </div>
                ))}
                </div>
            </div>

            {subItem?.length > 0 && 
            <div className="max-sm:flex max-sm:flex-col  grid grid-cols-3 gap-5 mt-20">
                {subItem.map((subItem)=>(
                <div key={subItem.id}>
                    <Link to={`/merkato/details/${subItem.id}`}>
                        
                        <div className="group hover:duration-300 hover:opacity-80 relative border border-gray-300 cursor-pointer grid grid-cols-2">
                        <img src={subItem.image} width={130} alt=""/>

                        <div className="m-auto">
                        <p className="text-[20px] font-bold">{subItem.name}</p>
                        <p className="text-[#51AA1B]">{subItem.price}</p>
                        </div>
                        <span className="hidden group-hover:block group-hover:duration-500 absolute top-2 right-4"><CiHeart size={20}/></span>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
            }


        </div>
     );
   
}
 
export default Products;