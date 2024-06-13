import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { supabase } from '../api';
type SigninProps = { setPage: (x: string) => void }

const Signin: React.FC<SigninProps> = ({ setPage }: SigninProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirectToSignup = (): void => {
    setPage("signup");
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if(data?.user) {
      toast.success("signin successful");
      console.log(data);
    }
    if(error){
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <span onClick={redirectToSignup} className="text-blue-500 hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
