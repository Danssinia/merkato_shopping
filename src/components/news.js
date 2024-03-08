import hum1 from '../images/icons/hum1.jpg'
import hum2 from '../images/icons/hum2.jpg'
import hum3 from '../images/icons/hum3.jpg'
import chapa from '../images/icons/Chapa.png'
import Amole from '../images/icons/Amole.png'
import CBE from '../images/icons/CBE.png'
import yene from '../images/icons/yene.png'
import TeleBirr from '../images/icons/TeleBirr.png'
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
const News = () => {
    return ( 
        <div className="max-w-[85%] m-auto mt-14">
            <div className="flex justify-between">
                <p className="font-bold text-2xl">Marketplace News</p>
                <p className="text-[#85B735] font-semibold">View All Articles</p>
            </div>

            <div className='grid grid-cols-3 gap-8 mt-10 mb-10'>
                <div className='border shadow-lg hover:shadow-2xl hover:duration-700'>
                <img src={hum1} alt="" className='w-full'/>
                <p className='text-blue-600 font-bold max-w-[85%] m-auto pt-6'>Electronics</p>
                <p className='max-w-[85%] hover:text-[#51AA1B] cursor-pointer hover:duration-700  m-auto py-4 text-2xl font-bold'>Motivation is Not Enough For People! Discipline Is.</p>
                <p className='max-w-[85%] m-auto text-slate-500 flex gap-8 pb-10'><span className='flex text-xs justify-center items-center gap-4'><FaRegCommentAlt size={20} />0</span> <span className='flex justify-center items-center gap-4 text-xs'><FaRegClock size={20}/>March 1,2024</span></p>
                </div>

                <div className='border shadow-lg hover:shadow-2xl hover:duration-700'>
                <img src={hum2} alt="" />
                <p className='text-blue-600 font-bold max-w-[85%] m-auto pt-6'>Electronics</p>
                <p className='max-w-[85%] hover:text-[#51AA1B] cursor-pointer hover:duration-700  m-auto py-4 text-2xl font-bold'>Motivation is Not Enough For People! Discipline Is.</p>
                <p className='max-w-[85%] m-auto text-slate-500 flex gap-8 pb-10'><span className='flex text-xs justify-center items-center gap-4'><FaRegCommentAlt size={20} />0</span> <span className='flex justify-center items-center gap-4 text-xs'><FaRegClock size={20}/>March 1,2024</span></p>
                </div>

                <div className='border shadow-lg hover:shadow-2xl hover:duration-700'>
                <img src={hum3} alt="" />
                <p className='text-blue-600 font-bold max-w-[85%] m-auto pt-6'>Electronics</p>
                <p className='max-w-[85%] hover:text-[#51AA1B] cursor-pointer hover:duration-700  m-auto py-4 text-2xl font-bold'>Motivation is Not Enough For People! Discipline Is.</p>
                <p className='max-w-[85%] m-auto text-slate-500 flex gap-8 pb-10'><span className='flex text-xs justify-center items-center gap-4'><FaRegCommentAlt size={20} />0</span> <span className='flex justify-center items-center gap-4 text-xs'><FaRegClock size={20}/>March 1,2024</span></p>
                </div>
            </div>

            {/* Code for payment parts */}

            <div className='mt-24 border-t'>
            <h1 className='text-4xl font-serif font-bold pt-10'>Safe Payments With</h1>
            <div className='grid grid-cols-5 gap-10'>
                <img src={chapa} alt="" className='h-full object-contain'/>
                <img src={yene} alt="" className='h-full object-contain'/>
                <img src={TeleBirr} alt="" className='h-full object-contain' />
                <img src={Amole} alt="" className='h-full object-contain' />
                <img src={CBE} alt="" className='h-full object-contain'/>
            </div>
            </div>
            
        </div>
     );
}
 
export default News;