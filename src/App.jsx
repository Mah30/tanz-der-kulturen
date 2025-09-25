import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./pages/Kontakt";
import TanzworkshopsPage from "./pages/Tanzevents/TanzworkshopsPage";
import HochschuleOkt from "./pages/Tanzevents/HochschuleOkt";
import LoginPage from "./pages/LoginPage";
import Performances from "./pages/Tanzevents/Performances";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route
          path="/tanzevent/tanzworkshops"
          element={<TanzworkshopsPage />}
        />
        <Route
          path="/tanzevent/tanzworkshops/test"
          element={<HochschuleOkt />}
        />
        <Route path="/tanzevent/Performances" element={<Performances />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
