import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
