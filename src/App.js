import Home from "./pages/home";
import NavBar from "./components/navbar";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deatils from "./components/details";
import NotFound from "./components/notfound";
import Footer from "./components/footer";
import CatagoryContextProvider from "./context/catagoryContext";
import Products from "./pages/products";
function App() {
  return (
    <>
      <BrowserRouter>
        <CatagoryContextProvider>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="details/:id" element={<Deatils />}></Route>
            <Route path="products" element={<Products/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </CatagoryContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
