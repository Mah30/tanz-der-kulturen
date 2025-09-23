import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./pages/Kontakt";
import TanzworkshopsPage from "./pages/Tanzevents/TanzworkshopsPage";
/* import LoginPage from "./pages/LoginPage"; */
import Performances from "./pages/Tanzevents/Performances";
import Footer from "./components/Footer";
import SignupPage from "./pages/Signup";





function App() {
  
  return (
    <div>
      <Header />
      
   

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/tanzevent/tanzworkshops" element={<TanzworkshopsPage />} />
  <Route path="/tanzevent/Performances" element={<Performances />} />
<Route path="/registration" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />

</Routes>
    
  );
}

export default App
