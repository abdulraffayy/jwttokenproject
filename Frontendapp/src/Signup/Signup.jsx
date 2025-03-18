import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    console.log('Signing up with:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;