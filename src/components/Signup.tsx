import React, { useState } from 'react';
import { supabase } from '../api';
import { toast } from 'react-toastify';
type SignupProps = {setPage:(x:string) => void};

const Signup: React.FC<SignupProps> = ({setPage}:SignupProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirectToSignin=():void=>{
    setPage("signin");
  }
  const handleSubmit = async(e: React.FormEvent) => {

    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if( data?.user ) {
      toast.success("Signup successful");
      setPage("signin");
    }
    if( error){
      toast.error(error.message);
    }
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded"
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
              className="w-full p-3 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <span onClick={redirectToSignin} className="text-blue-500 hover:underline">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
