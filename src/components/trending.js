import { useState } from 'react';
import trending from './trendobj';
import admin from '../images/icons/admin.png'
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
const Trending = () => {

    const [color,setColor] = useState(1)

    const handleColor = (trendId) =>{
        setColor(trendId)
    }

    const [subItem,setSubItem]= useState(
        trending[0].subItems
    )
   
    return ( 
        <div className="max-w-[85%] m-auto mt-12">
            <div className='flex justify-between font-semibold border-b text-xl pb-2'>
                <p className='font-semibold'>Trending Items</p>
                <div className='flex opacity-[0.6] text-[18px]  gap-10 justify-end'>
                {trending.map((trend)=>(
                    <p  key={trend.id} onClick={()=>{
                        setColor(trend.id)
                        setSubItem(trend.subItems)
                    }} className={`cursor-pointer ${color===trend.id ?'text-[#51AA1B] border-b-2  border-[#51AA1B] border-width ':null}`}  >
                        {trend.title}
                    </p>
                ))}
                </div>
                
            </div>

            {/*code for sub item*/}
            {subItem.length > 0 && 
           <div className='grid grid-cols-4 gap-8 mt-8'>
            {subItem.map((subItem)=>(
                <div className='relative group border hover:opacity-80 hover:duration-500 cursor-pointer' key={subItem.id}>
                    <Link to={`details/${subItem.id}`}>
                    <p className='flex justify-center items-center'><img src={subItem.image} alt="" /></p>
                    <p className='flex justify-center items-center font-semibold'>{subItem.name}</p>
                    <p className='flex justify-end pr-6 text-[#83B735] font-bold'>{subItem.price}</p>
                    </Link>
                    <span className='hidden group-hover:block absolute top-5 right-10'><CiHeart size={22}/></span>
                </div>
            ))}    
            </div>
            
            }
            
            {/*code for unique section*/}

            <div className='mt-24 grid grid-cols-5 p-4  shadow-lg shadow-slate-300'>
                <p className='border-r flex flex-col justify-center items-center font-bold'>Free Delivery <span className='opacity-[0.4] text-sm'>from ETB100</span></p>
                <p className='border-r flex flex-col justify-center items-center font-bold'>99% Customer <span className='opacity-[0.4] text-sm'>feedback</span></p>
                <p className='border-r flex flex-col justify-center items-center font-bold'>10 Days <span className='opacity-[0.4] text-sm'>for free return</span></p>
                <p className='border-r flex flex-col justify-center items-center font-bold'>Payment<span className='opacity-[0.4] text-sm'>Secure System</span></p>
                <p className='border-r flex flex-col justify-center items-center font-bold'>24/7<span className='opacity-[0.4] text-sm'>Online Support</span></p>
            </div>

            {/*code for banner images*/}
            <img className='mt-20' src={admin} alt="" />
        </div>
     );
}
 
export default Trending;