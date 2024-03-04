import Catagory from "../components/catagory";
import Header from "../components/header";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import Trending from "../components/trending";

const Home = () => {
    return (
        <>
        <Header/>
        <NavBar/>
        <Hero/>
        <Catagory/>
        <Trending/>
        </> 
     );
}
 
export default Home;