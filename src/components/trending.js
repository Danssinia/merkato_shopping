import { useState } from 'react';
import trending from './trendobj';
import admin from '../images/icons/admin.png'
const Trending = () => {

    const [subItem,setSubItem]= useState(
        trending[0].subItems
    )
    console.log(subItem)
    return ( 
        <div className="max-w-[80%] m-auto mt-12">
            <div className='flex justify-between border-b text-xl pb-2'>
                <p className='font-semibold'>Trending Items</p>
                <div className='flex opacity-[0.6] text-[18px]  gap-10 justify-end'>
                {trending.map((trend)=>(
                    <p key={trend.id} onClick={()=>{
                        setSubItem(trend.subItems)
                    }} className='cursor-pointer' >
                        {trend.title}
                    </p>
                ))}
                </div>
                
            </div>

            {/*code for sub item*/}
            {subItem.length > 0 && 
            <div className='grid grid-cols-4 gap-8 mt-8'>
            {subItem.map((subItem)=>(
                <div className='border' key={subItem.id}>
                    <p className='flex justify-center items-center'><img src={subItem.image} alt="" /></p>
                    <p className='flex justify-center items-center font-semibold'>{subItem.name}</p>
                    <p className='flex justify-end pr-6 text-[#83B735] font-bold'>{subItem.price}</p>
                </div>
            ))}    
            </div>}
            
            {/*code for unique section*/}

            <div className='mt-24 grid grid-cols-5 p-4  shadow-lg shadow-slate-300'>
                <p className='border-r flex flex-col justify-center items-center font-bold'>Free Delivery <span className='opacity-[0.4] text-sm'>from ETB100</span></p>
                <p className='border-r flex flex-col justify-center items-center font-bold'>99% Customer <span className='opacity-[0.4] text-sm'>feedback</span></p>
                <p className='border-r flex flex-col justify-center items-center font-bold'>10 Days <span className='opacity-[0.4] text-sm'>from ETB100</span></p>
                <p className='border-r flex flex-col justify-center items-center font-bold'>Payment<span className='opacity-[0.4] text-sm'>Secure System</span></p>
                <p className='border-r flex flex-col justify-center items-center font-bold'>24/7<span className='opacity-[0.4] text-sm'>Online Support</span></p>
            </div>

            {/*code for banner images*/}
            <img className='mt-20' src={admin} alt="" />
        </div>
     );
}
 
export default Trending;