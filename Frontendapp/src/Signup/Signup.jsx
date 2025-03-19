import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const userData = {
      fullName,
      username,
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/signup', userData);
      console.log('Signup successful:', response.data);
      setSuccessMessage('Signup successful!'); // Show success message
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('There was an error signing up:', error);
      setErrorMessage('There was an error signing up. Please try again.'); // Show error message
      setSuccessMessage(''); // Clear any previous success message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
        
        <input 
          type="text" 
          placeholder="Full Name" 
          className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        
        <input 
          type="text" 
          placeholder="Username" 
          className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input 
          type="email" 
          placeholder="Email" 
          className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <input 
          type="password" 
          placeholder="Confirm Password" 
          className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
        
        {successMessage && <p className="text-green-500 mt-4 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4 text-center">{errorMessage}</p>}
      </form>
    </div>
  )
}

export default Signup