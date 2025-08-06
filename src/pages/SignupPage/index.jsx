import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
/* import { authService } from "../services/authService"; */
/* import { SessionContext } from "../SessionContext/SessionContext"; */
import SignupForm from "./SignupForm";


const SignupPage = () => {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* const session = useContext(SessionContext); */
  const navigate = useNavigate();

/*   if (!session) {
    return <h2>Loading...</h2>;
  } */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      await authService.signup(firstName, lastName, email, password);
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
    <SignupForm
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isLoading={isLoading}
      error={error}
      success={success}
      handleSubmit={handleSubmit}
    />
  );
}
export default SignupPage;