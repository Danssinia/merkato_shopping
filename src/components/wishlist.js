import fish from "../images/icons/fish.jpg";
const Wishlist = () => {
    return ( 
        <div className=" max-w-[80%] m-auto mt-20">
        <table border={2} className="w-full  border border-gray-400">
                <tr className="border  border-gray-400">
                    <th className="border border-gray-400"></th>
                    <th className="border border-gray-400">Product name</th>
                    <th className="border border-gray-400">Unit Price</th>
                    <th className="border border-gray-400 ">Stock Status</th>
                    <th className="">   </th>
                </tr>
           
            <tbody>
                <tr>
                    <td><img src={fish} width={200} alt="" /></td> 
                    <td className="pl-14 font-bold">Fish</td> 
                    <td className="pl-10 text-[#51aa1b]">150 ETB</td> 
                    <td className="pl-10 font-bold">In Stock</td> 
                    <td><button className="px-6 py-2 flex justify-center items-center text-white bg-[#51aa1b] rounded-full ml-10">Add to cart</button></td> 
                </tr>  
            </tbody>
        </table>
        </div>
     );
}
 
export default Wishlist;