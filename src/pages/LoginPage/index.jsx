import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Alert } from "flowbite-react";
/* import { authService } from "../services/authService"; */
/* import { SessionContext } from "../SessionContext/SessionContext"; */
import LoginForm from "./LoginForm";
/* import { Spinner, Button, Card, TextInput, Label, Alert } from  */"flowbite-react";


const LoginPage = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

/*   const session = useContext(SessionContext); */
  const navigate = useNavigate();

 /*  if (!session) {
    return <h2>Loading...</h2>;
  } */

 /*  const { setToken } = session; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      /* const responseData = await authService.login(email, password); */ //write our backend here after


    //token simulation
      const responseData = { token: "fake-token-placeholder" }; //erase this after our backend

   /*    setToken(responseData.token); */
      setSuccess("Login successful! Redirecting...");

      setTimeout(() => navigate("/"), 1500); // What about the page to navigate after login? - define route
    } catch (error) {
      console.error("Error during login:", error);
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
    <div className="flex min-h-screen items-center justify-center bg-gray-300">
      <Card className="w-full max-w-sm p-8 bg-gray-800 shadow-lg rounded-lg md:max-w-md lg:max-w-lg">
        <h3 className="mb-4 text-center text-2xl font-bold text-white">Log In</h3>

        {error && <Alert color="failure">{error}</Alert>}
        {success && <Alert color="success">{success}</Alert>}

        <LoginForm
          email={email}
          password={password}
          isLoading={isLoading}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleSubmit}
        />

        <div className="mt-4 flex justify-between text-sm">
          <Link to="/" className="text-gray-400 hover:text-red-500">Back to Home</Link>
          <Link to="/signup" className="text-gray-400 hover:text-red-500">Create an account</Link>
        </div>
      </Card>
    </div>
  );
}
 
export default LoginPage;




/* 
    try {
      const responseData = await authService.login(email, password);
      setToken(responseData.token);
      setSuccess("Login successful! Redirecting...");

      setTimeout(() => navigate("/"), 1500); // What about the page to navigate after login?
    } catch (error) {
      console.error("Error during login:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred."
      );
    } finally {
      setIsLoading(false);
    }
  };
 */