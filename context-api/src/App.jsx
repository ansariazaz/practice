import { useEffect, useState } from "react";
import Home from "./Home/Home";
import "./App.css";
import { myContext, useTheme } from "./contextApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import Profile from "./component/profile/Profile";
import Navbar from "./component/Navbar";
import ProductDetails from "./component/productDetails/ProductDetails";
import Products from "./component/products/Products";
import Breadscrum from "./component/breadscrum/Breadscrum";
function App() {
  const [count, setCount] = useState(0);
  const {theme,toggelTheme } = useTheme()
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res)=>setProducts(res.products));
  }, []);
  return (
    <div className="container">
    <myContext.Provider value={{ count, setCount,theme,toggelTheme }}>
      <BrowserRouter>
      <Navbar />
      <Breadscrum/>
          <Routes>
            <Route path="/" element={<Home products={products?.slice(0,6)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<ProductDetails products={products}/>} />
            <Route path="/products" element={<Products products={products}/>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;
