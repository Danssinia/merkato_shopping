const Footer = () => {
    return ( 
        <div className="mt-32 border-t">
            <div className="max-sm:flex max-sm:flex-col  pt-10 grid grid-cols-4 gap-20 max-w-[80%]  m-auto">
            <div><p className="text-3xl font-serif font-bold">መርካቶ Shopping</p></div>
            
            <ul className="font-serif grid gap-3 text-gray-500"><p className="text-black font-bold text-2xl">Quick Links</p>
                <li>Support Center</li>
                <li>Term & Conditions</li>
                <li>Shipping</li>
                <li>Privacy Policy</li>
                <li>Help</li>
                <li>Products Return</li>
                <li>FAQs</li>
            </ul>

            <ul className="font-serif grid gap-3 text-gray-500"><p className="text-black font-bold text-2xl">Our Stores</p>
                <li>4-kilo</li>
                <li>Piassa</li>
                <li>Mexico</li>
                <li>Megenagna</li>
                <li>Merkato</li>
                <li>Addisu Gebeya</li>
                <li>Stadium</li>
            </ul>
            
            <button className="bg-[#FF6251] w-[200px] h-[60px]">BACK TOP</button>
            </div>
            <p className="flex justify-center items-center mt-10 p-6 bg-slate-100"> All Rights Reserved &copy;Copyright 2024 by Danssinia</p>
        </div>
     );
}
 
export default Footer;