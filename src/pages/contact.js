const Contact = () => {
    return (  
        <div>
        <div className="p-10  max-w-[65%]  m-auto mt-20">
            <div className="max-w-[90%] m-auto">
            <h1 className="text-5xl font-semibold pb-[8vh]">Get in touch</h1>
            <p className="pb-4 text-gray-600">Fundpress site thoughtfully designed for real humans which means the best user experience for your entire community of donors, fundraisers, customers, and staff.</p>
            </div>
            <div className="max-w-[90%] m-auto">
                <form method="post">
                    <div className="grid gap-4 grid-cols-2">
                        <div>
                        <label className="block pb-4">Name</label>
                        <input className="border border-slate-300 outline-none px-4 w-full py-[2vh]" type="text"></input>
                        </div>

                        <div>
                        <label className="block pb-4">Email</label>
                        <input className="border border-slate-300 outline-none px-4 w-full py-[2vh]" type="text"></input>
                        </div>
                    </div>
                    <div>
                        <label className="block py-4">Subject</label>
                        <input className="border border-slate-300 outline-none px-4 py-[2vh] w-full" type="text"></input>
                    </div>
                    <div>
                        <label className="block py-4">Description</label>
                        <textarea className="border px-4 py-4 border-slate-300 outline-none w-full h-36 resize-none"></textarea>
                    </div>

                    <button className=" mt-8 opacity-90 hover:opacity-100 hover:duration-300 bg-[#0063D1] rounded-full flex justify-center items-center py-3 px-12 text-white">Submit</button>
                </form>
            </div>
        </div>
        {/*sample code for the map */}
        <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe className="relative h-[400px] w-full bg-white" src="https://maps.google.com/maps?q=Bole&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no">   
                    </iframe>
                </div>
        </div>
        </div>
    );
}
 
export default Contact;