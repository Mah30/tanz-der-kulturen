import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Alert } from "flowbite-react";
import SignupForm from "./SignupForm";
import Footer from "../../components/Footer";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [newsletter, setNewsletter] = useState("yes");
  const [purpose, setPurpose] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!fullName || !eventTitle || !eventDate) {
        throw new Error("Please fill all required fields.");
      }

      // FRONTEND-ONLY: save locally so you can test
      const payload = { fullName, eventTitle, eventDate, newsletter, purpose };
      const key = "tdk_registrations";
      const arr = JSON.parse(localStorage.getItem(key) || "[]");
      arr.push({ ...payload, createdAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(arr));

      setSuccess("Registration saved (frontend only).");

      // Reset form fields
      setFullName(""); setEventTitle(""); setEventDate("");
      setNewsletter("yes"); setPurpose("");
      // Optional redirect:
      // setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-300">
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-sm p-8 bg-[#13505a] shadow-lg rounded-lg md:max-w-md lg:max-w-lg">
          <h3 className="mb-4 text-center text-2xl font-bold text-white">
            Anmeldung / Registration
          </h3>

          {error && <Alert color="failure">{error}</Alert>}
          {success && <Alert color="success">{success}</Alert>}

          <SignupForm
            fullName={fullName}
            eventTitle={eventTitle}
            eventDate={eventDate}
            newsletter={newsletter}
            purpose={purpose}
            isLoading={isLoading}
            onFullNameChange={(e) => setFullName(e.target.value)}
            onEventTitleChange={(e) => setEventTitle(e.target.value)}
            onEventDateChange={(e) => setEventDate(e.target.value)}
            onNewsletterChange={(e) => setNewsletter(e.target.value)}
            onPurposeChange={(e) => setPurpose(e.target.value)}
            onSubmit={handleSubmit}
          />

          <div className="mt-4 flex justify-between text-sm">
            <Link to="/" className="text-gray-400 hover:text-red-500">Back to Home</Link>
            <Link to="/login" className="text-gray-400 hover:text-red-500">Already have an account?</Link>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
