import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./pages/Kontakt";
import TanzworkshopsPage from "./pages/Tanzevents/TanzworkshopsPage";



function App() {
 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tanzworkshops/:workshopName" element={<TanzworkshopsPage />} />
      </Routes>
    </Router>
  );
}

export default App
