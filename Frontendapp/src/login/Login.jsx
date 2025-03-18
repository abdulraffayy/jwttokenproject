import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    // Reset error if email is valid
    setError('');
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Welcome Back!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don&apos;t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login