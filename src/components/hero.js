import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from 'react';
import images from "./object";
const Hero = () => {
    const [currentIndex,setCurrentIndex] = useState(0);

    const ArrowRight = () =>{
        const isLastImage = currentIndex === images.length -1;
        const newIndex =isLastImage ? 0:currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const ArrowLeft = () =>{
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    return ( 
        <div className='relative group lg:mt-48'>
            <div>
            <img src={images[currentIndex]} alt="Electronics" className='group w-full h-[600px] object-cover'  />
            </div>
            
             {/*Arrow for left*/}
            <span onClick={ArrowLeft} className='absolute hidden group-hover:block top-[50%] left-5 text-4xl text-white bg-black/60 rounded-full p-3 cursor-pointer'><FaChevronLeft size={20} /></span>

            {/*Arrow for Right*/}
            <span onClick={ArrowRight} className='absolute hidden group-hover:block top-[50%] right-5 text-4xl text-white bg-black/60 rounded-full p-3 cursor-pointer'><FaChevronRight size={20}/></span>
        </div>
     );
}
 
export default Hero;