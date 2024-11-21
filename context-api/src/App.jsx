import { useState } from "react";
import Home from "./Home/Home";
import "./App.css";
import { myContext, useTheme } from "./contextApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import Profile from "./component/profile/Profile";
import Navbar from "./component/Navbar";
function App() {
  const [count, setCount] = useState(0);
  const {theme,toggelTheme } = useTheme()
  return (
    <>
    <myContext.Provider value={{ count, setCount,theme,toggelTheme }}>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
      </myContext.Provider>
    </>
  );
}

export default App;
