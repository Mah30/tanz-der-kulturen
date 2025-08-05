import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./pages/Kontakt";
import TanzworkshopsPage from "./pages/Tanzevents/TanzworkshopsPage";
import LoginPage from "./pages/LoginPage";
import Performance from "./pages/Tanzevents/Performance";








function App() {
  
  return (
    <div>
      <Header />
   

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/tanzevent/tanzworkshops" element={<TanzworkshopsPage />} />
        <Route path="/tanzevent/performance" element={<Performance />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
    
  );
}

export default App
