import hum1 from "../images/icons/hum1.jpg";
import hum2 from "../images/icons/hum2.jpg";
import hum3 from "../images/icons/hum3.jpg";
import chapa from "../images/icons/Chapa.png";
import Amole from "../images/icons/Amole.png";
import CBE from "../images/icons/CBE.png";
import yene from "../images/icons/yene.png";
import TeleBirr from "../images/icons/TeleBirr.png";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
const News = () => {
  return (
    <div className="max-w-[85%] m-auto mt-14">
      <div className="flex justify-between">
        <p className="max-sm:text-xl font-bold text-2xl">Marketplace News</p>
        <p className="text-[#85B735] flex justify-center items-center font-semibold">
          View All Articles
        </p>
      </div>

      <div className="max-sm:flex max-sm:flex-col grid grid-cols-3 gap-8 mt-10 mb-10">
        <div className="max-sm:rounded-lg border shadow-lg hover:shadow-2xl hover:duration-700">
          <img
            src={hum1}
            alt=""
            className="w-full  max-sm:h-[300px] max-sm:object-cover"
          />
          <p className="text-blue-600  font-bold max-w-[85%] m-auto pt-6">
            Health and Food
          </p>
          <p className="max-w-[85%] hover:text-[#51AA1B] cursor-pointer hover:duration-700 max-lg:text-xl  m-auto py-4 text-2xl font-bold">
          Farm-to-Table  and Sustainable Food Practices
          </p>
          <p className="max-w-[85%] m-auto text-slate-500 flex gap-8 pb-10">
            <span className="flex text-xs justify-center items-center gap-4">
              <FaRegCommentAlt size={20} />2
            </span>{" "}
            <span className="flex justify-center items-center gap-4 text-xs">
              <FaRegClock size={20} />
              March 1,2024
            </span>
          </p>
        </div>

        <div className="max-sm:rounded-lg border shadow-lg hover:shadow-2xl hover:duration-700">
          <img
            src={hum2}
            alt=""
            className="max-sm:h-[300px] h-[250px] w-full object-cover max-sm:object-cover"
          />
          <p className="text-blue-600 font-bold max-w-[85%] m-auto pt-6">
            Electronics
          </p>
          <p className="max-w-[85%] max-lg:text-xl hover:text-[#51AA1B] cursor-pointer hover:duration-700  m-auto py-4 text-2xl font-bold">
          Latest Innovations and Gadgets in the Electronics Market  
          </p>
          <p className="max-w-[85%] m-auto text-slate-500 flex gap-8 pb-10">
            <span className="flex text-xs justify-center items-center gap-4">
              <FaRegCommentAlt size={20} />3
            </span>{" "}
            <span className="flex justify-center items-center gap-4 text-xs">
              <FaRegClock size={20} />
              March 12,2024
            </span>
          </p>
        </div>

        <div className="max-sm:rounded-lg border shadow-lg hover:shadow-2xl hover:duration-700">
          <img
            src={hum3}
            alt=""
            className="max-sm:h-[300px] max-sm:object-cover"
          />
          <p className="text-blue-600 font-bold max-w-[85%] m-auto pt-6">
            Health and Food
          </p>
          <p className="max-w-[85%] max-lg:text-xl hover:text-[#51AA1B] cursor-pointer hover:duration-700  m-auto py-4 text-2xl font-bold">
          the Intersection of Health, Nutrition, and Delicious Cuisine
          </p>
          <p className="max-w-[85%] m-auto text-slate-500 flex gap-8 pb-10">
            <span className="flex text-xs justify-center items-center gap-4">
              <FaRegCommentAlt size={20} />10
            </span>{" "}
            <span className="flex justify-center items-center gap-4 text-xs">
              <FaRegClock size={20} />
              April 1,2024
            </span>
          </p>
        </div>
      </div>

      {/* Code for payment parts */}

      <div className="mt-24 border-t">
        <h1 className="text-4xl font-serif font-bold pt-10">
          Safe Payments With
        </h1>
        <div className="mt-10 grid grid-cols-5 gap-10 max-sm:justify-center max-sm:items-center max-sm:flex max-sm:flex-col">
          <img
            src={chapa}
            alt=""
            className="max-sm:w-[150px]  h-full object-contain"
          />
          <img
            src={yene}
            alt=""
            width={140}
            className="max-sm:ml-0 ml-10 h-full object-contain"
          />
          <img
            src={TeleBirr}
            alt=""
            width={80}
            className="max-sm:ml-0 ml-10 h-full object-contain"
          />
          <img
            src={Amole}
            alt=""
            width={100}
            className="h-full object-contain"
          />
          <img src={CBE} alt="" width={100} className="h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default News;
