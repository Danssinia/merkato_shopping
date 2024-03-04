import arrays from "./array";
import { useState } from "react";

const Catagory = () => {

    const [subItem,setSubItem]=useState(
        arrays[0].subItems
    );
    const [color,setColor]=useState('0')

    const ColorChanger=(arrayId)=>{
setColor(arrayId)
    }
    return ( 
        <div className="max-w-[90%] m-auto">
        <div className="relative grid grid-cols-6 border h-[160px]  font-bold border-slate-300  mt-20 ">
            {arrays.map((array)=>(
                <div key={array.id} onClick={()=>{
                    setSubItem(array.subItems)
                    ColorChanger(array.id)
                    }}  className={`h-full flex flex-col justify-center items-center cursor-pointer border-r  border-slate-200 ${color===array.id ? 'bg-[#51AA1B]':'bg-white'}`}>
                    
                    <p className="flex justify-center items-center"><img src={array.image} alt="" /></p>
                    <p className="flex justify-center items-center">{array.name}</p>
                    <p className="flex font-normal text-xs justify-center items-center">{array.items} </p> 
                </div>
            ))} 
        </div>
        
        {/*code for the sub item*/}
        {subItem.length > 0 && 
        <div className="grid grid-cols-6 font-semibold">
            {subItem.map(subItem =>(
                <div key={subItem.id}>
                    <p className="flex mt-8 justify-center items-center"><img src={subItem.image} width={130} alt="" /></p>
                    <p className="flex justify-center items-center">{subItem.name}</p>
                    <p className="flex justify-end text-[#83B735]">{subItem.price}</p>
                </div>
            ))}
        </div>
        }
        </div>
     );
}
 
export default Catagory;