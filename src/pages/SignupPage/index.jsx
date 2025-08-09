import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
/* import { authService } from "../services/authService"; */
/* import { SessionContext } from "../SessionContext/SessionContext"; */
import SignupForm from "./SignupForm";
import Footer from "../../components/Footer"


const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* const session = useContext(SessionContext); */
  const navigate = useNavigate();

/*   if (!session) {
    return <h2>Loading...</h2>;
  } */

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      //await authService.signup(firstName, lastName, email, password);
      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      console.error("Error during signup:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-300">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <SignupForm
          form={form}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
          success={success}
        />
      </main>
      <Footer />
    </div>
  );
}
export default SignupPage;