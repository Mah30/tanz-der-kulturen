import Dashboard from "./admin/pages/Dashboardss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Tanzworkshops from "./pages/Tanzevents/Tanzworkshops";
/* import LoginPage from "./pages/LoginPage"; */
import Performances from "./pages/Tanzevents/Performances";
/* import SignupPage from "./pages/SignupPage" */
import Footer from "./components/Footer";
import Login from "./login-user/Login";
import Admin from "./admin/pages/Admin";
import AdminClasses from "./admin/pages/Class";
import Events from "./admin/pages/Events";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/pages/Class" element={<AdminClasses />} />
        <Route path="/login-user/Login" element={<Login />} />
        <Route path="/admin/pages/Admin" element={<Admin />} />
        <Route path="/admin/pages/Events" element={<Events />} />
        <Route path="/admin/dashboardss" element={<Dashboard />} />
        <Route
          path="/pages/Tanzevents/Tanzworkshops"
          element={<Tanzworkshops />}
        />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
