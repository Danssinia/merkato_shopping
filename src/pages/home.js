import Catagory from "../components/catagory";
import Footer from "../components/footer";
import Hero from "../components/hero";

import News from "../components/news";
import Trending from "../components/trending";

const Home = () => {
  return (
    <>
      <Hero />
      <Catagory />
      <Trending />
      <News />
    </>
  );
};

export default Home;
