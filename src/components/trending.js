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
            <div className='max-sm:flex max-sm:flex-col flex max-sm:justify-start max-sm:items-start justify-between font-semibold border-b text-xl pb-2'>
                <p className='font-semibold max-sm:flex max-sm:justify-center max-sm:items-center'>Trending Items</p>
                <div className='flex opacity-[0.6] max-sm:pt-4 max-sm:text-sm text-[18px]  gap-10 justify-end'>
                {trending.map((trend)=>(
                    <p  key={trend.id} onClick={()=>{
                        setColor(trend.id)
                        setSubItem(trend.subItems)
                    }} className={` cursor-pointer ${color===trend.id ?'text-[#51AA1B] border-b-2  border-[#51AA1B] border-width ':null}`}  >
                        {trend.title}
                    </p>
                ))}
                </div>
                
            </div>

            {/*code for sub item*/}
            {subItem.length > 0 && 
           <div className='max-sm:flex max-sm:flex-col  grid grid-cols-4 gap-8 mt-8'>
            {subItem.map((subItem)=>(
                <div className='max-sm:rounded-lg max-sm:pb-10 relative group border hover:opacity-80 hover:duration-500 cursor-pointer' key={subItem.id}>
                    <Link to={`details/${subItem.id}`}>
                    <p className='flex justify-center items-center'><img src={subItem.image} alt="" /></p>
                    <p className='max-sm:font-bold max-sm:text-[25px] flex justify-center items-center font-semibold'>{subItem.name}</p>
                    <p className='flex justify-end pr-6 text-[#83B735] font-bold'>{subItem.price}</p>
                    </Link>
                    <span className='hidden group-hover:block absolute top-5 right-10'><CiHeart size={22}/></span>
                </div>
            ))}    
            </div>
            
            }
            
            {/*code for unique section*/}

            <div className='max-sm:flex max-sm:flex-col max-sm:gap-4  mt-24 grid grid-cols-5 p-4  shadow-lg shadow-slate-300'>
                <p className='border-r max-sm:border max-sm:p-4 flex flex-col justify-center items-center font-bold'>Free Delivery <span className='opacity-[0.4] text-sm'>from ETB100</span></p>
                <p className='border-r max-sm:border max-sm:p-4 flex flex-col justify-center items-center font-bold'>99% Customer <span className='opacity-[0.4] text-sm'>feedback</span></p>
                <p className='border-r max-sm:border max-sm:p-4 flex flex-col justify-center items-center font-bold'>10 Days <span className='opacity-[0.4] text-sm'>for free return</span></p>
                <p className='border-r max-sm:border max-sm:p-4 flex flex-col justify-center items-center font-bold'>Payment<span className='opacity-[0.4] text-sm'>Secure System</span></p>
                <p className='border-r max-sm:border max-sm:p-4 flex flex-col justify-center items-center font-bold'>24/7<span className='opacity-[0.4] text-sm'>Online Support</span></p>
            </div>

            {/*code for banner images*/}
            <img className='mt-20' src={admin} alt="" />
        </div>
     );
}
 
export default Trending;