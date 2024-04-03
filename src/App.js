import Home from "./pages/home";
import NavBar from "./components/navbar";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deatils from "./components/details";
import NotFound from "./components/notfound";
import Footer from "./components/footer";
import CatagoryContextProvider from "./context/catagoryContext";
import Products from "./pages/products";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import About from "./pages/About";
import Wishlist from "./components/wishlist";
import FilterProvider from "./context/filterContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CatagoryContextProvider>
          <FilterProvider>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/merkato" element={<Home />}></Route>
            <Route path="merkato/details/:id" element={<Deatils />}></Route>
            <Route path="merkato/products" element={<Products/>}></Route>
            <Route path="merkato/contact" element={<Contact/>}></Route>
            <Route path="merkato/About" element={<About/>}></Route>
            <Route path="merkato/blog" element={<Blog/>}></Route>
            <Route path="merkato/wishlist" element={<Wishlist/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
          </FilterProvider>
        </CatagoryContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
