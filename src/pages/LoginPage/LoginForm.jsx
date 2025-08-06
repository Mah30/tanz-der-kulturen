import React, { useState } from 'react';

const LoginForm = () => {
    /* const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full rounded border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full rounded bg-teal-600 py-2 text-white hover:bg-green-900"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
