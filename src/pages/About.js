import aboutus from "../images/icons/aboutus.png"
import aboutus2 from "../images/icons/aboutus2.png"
import Teams from "../components/team";
const About = () => {
    return ( 
        <div className=" max-w-[90%] m-auto  mt-20">
            <div className=" grid grid-cols-2 ">
            <div>
                <div className="text-[130px] font-bold absolute top-[26%] opacity-5">
                    HISTORY
                </div>
                <h1 className="text-[#0063D1] font-serif">OUR HISTORY</h1>
                <h1 className="text-5xl font-serif font-semibold py-6">Creative and renovate fashion trends</h1>
                <p className="text-black/80">Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>

                <div className="pt-20 flex justify-evenly">
                    <p className="flex flex-col text-black/80"><span className="text-4xl font-bold text-[#0063D1]">12</span> Years Experience</p>
                    <p className="flex flex-col text-black/80"><span className="text-4xl font-bold text-[#0063D1]">20K</span> Happy Customers</p>
                    <p className="flex flex-col text-black/80"><span className="text-4xl font-bold text-[#0063D1]">100%</span>Clients Satisfaction</p>
                </div>
            </div>
            <div className="flex justify-end">
                <img src={aboutus} alt="" />
            </div>
            </div>


            {/*code for the second section*/}

            <div className=" grid grid-cols-2 gap-16 mt-[15%] ">
            <div className="flex justify-start">
                <img src={aboutus2} alt="" />
            </div>
            <div>
                <div className="text-[130px] font-bold absolute opacity-5">
                    VISION
                </div>
                <h1 className="text-[#0063D1] font-serif">OUR VISION</h1>
                <h1 className="text-[40px] font-serif font-bold py-6">We are marketpress</h1>
                <p className="text-black/80 py-4">Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>

                <div className="px-8">
                    <p className="flex flex-col py-1 font-semibold text-black/80">Credibly innovate granular internal</p>
                    <p className="flex flex-col py-1 font-semibold text-black/80">Grantedly underconstructions reloaded</p>
                    <p className="flex flex-col py-1 font-semibold text-black/80">Interactively procrastinate high-payoff</p>
                    <p className="flex flex-col py-1 font-semibold text-black/80">
                    Completely synergize resource taxing relationships </p>
                </div>
            </div>
            
            </div>

            {/*code for team section*/}
            <div className="mt-44">
                <h1 className="text-4xl font-bold">Meet With Our Team</h1>
                <div className="grid grid-cols-4 pt-16 gap-8 ">
                {Teams.map(team=>(
                    <div key={team.id}>
                        <img src={team.image} className="h-[400px] w-[300px] object-cover" />
                        <p className="pt-8 flex justify-center font-semibold text-[#0061D1]">{team.title}</p>
                        <p className="flex justify-center font-bold text-xl">{team.name}</p>
                    </div>
                ))}
                </div>
                
            </div>
        </div>
     );
}
 
export default About;