


// src/components/SignupForm.jsx

import { Spinner, Button, Card, TextInput, Label, Alert } from "flowbite-react";
import { Link } from "react-router-dom";

const SignupForm = ({
  form,
  onChange,
  onSubmit,
  isLoading,
  error,
  success
}) => (
  <Card className="w-full max-w-sm p-8 bg-[#13505a] shadow-lg rounded-lg md:max-w-md lg:max-w-lg">
    <h3 className="mb-4 text-center text-2xl font-bold text-white">Sign Up</h3>

    {error && <Alert color="failure">{error}</Alert>}
    {success && <Alert color="success">{success}</Alert>}

    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="firstName" value="First Name" className="text-gray-300" />
        <TextInput
          id="firstName"
          name="firstName"
          type="text"
          placeholder="John"
          value={form.firstName}
          onChange={onChange}
          required
          className="w-full rounded-md border border-gray-600 bg-[#027D8F] p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label htmlFor="lastName" value="Last Name" className="text-gray-300" />
        <TextInput
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Doe"
          value={form.lastName}
          onChange={onChange}
          required
          className="w-full rounded-md border border-gray-600 bg-[#027D8F] p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label htmlFor="email" value="Email" className="text-gray-300" />
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          value={form.email}
          onChange={onChange}
          required
          className="w-full rounded-md border border-gray-600 bg-[#027D8F] p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label htmlFor="password" value="Password" className="text-gray-300" />
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={onChange}
          required
          className="w-full rounded-md border border-gray-600 bg-[#027D8F] p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <Button
        type="submit"
        className="cursor-pointer  w-full rounded-md dark:bg-[#027D8F] light:bg-[#027D8F] py-2 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#315358] focus:outline-none focus:ring-4 focus:ring-red-500"
        disabled={isLoading}
      >
        {isLoading && <Spinner size="sm" className="mr-2" />}
        Create Account
      </Button>
    </form>

    <div className="mt-4 flex justify-between text-sm">
      <Link to="/" className="text-gray-400 transition-all duration-300 hover:text-red-500">
        Back to Home
      </Link>
      <Link to="/login" className="text-gray-400 transition-all duration-300 hover:text-red-500">
        Already have an account? Log in
      </Link>
    </div>
    
  </Card>
);

export default SignupForm;
