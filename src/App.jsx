import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./pages/Kontakt";
import TanzworkshopsPage from "./pages/Tanzevents/TanzworkshopsPage";






function App() {
  
  return (
    <div>
      <Header />
      <Home/>
      
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
