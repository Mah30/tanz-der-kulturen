import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./pages/Kontakt";
import TanzworkshopsPage from "./pages/Tanzevents/TanzworkshopsPage";
import Header from "./components/Header";



function App() {
 

  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tanzevent/tanzworkshops" element={<TanzworkshopsPage />} />
        <Route path="/tanzevent/performance" element={<Performance />} />
      </Routes>
    </div>
    
  );
}

export default App
