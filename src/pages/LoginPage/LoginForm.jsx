import React from 'react';
import { Spinner, Button, TextInput, Label } from "flowbite-react";



const LoginForm = ({
  email,
  password,
  isLoading,
  onEmailChange,
  onPasswordChange,
  onSubmit,

}) => {

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email" value="Email" className="text-gray-300" />
        <TextInput
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={onEmailChange}
          required
          className="w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label htmlFor="password" value="Password" className="text-gray-300" />
        <TextInput
          id="password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          required
          className="w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-md bg-orange-400 py-2 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
        disabled={isLoading}
      >
        {isLoading && <Spinner size="sm" className="mr-2" />}
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
