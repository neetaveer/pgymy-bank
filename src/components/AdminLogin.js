import React, {useEffect, useState } from 'react';
import { RiUserFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebaseConfig'; // Import your Firebase auth instance
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [user, setUser] = useState(null); // Initialize user state with null

  useEffect(() => {
    // Set up an auth state listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state when auth state changes
    });

    return () => {
      // Clean up the listener when the component unmounts
      unsubscribe();
    };
  }, []); // Run the effect only once on mount


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set the specific username and password for the allowed user
    const allowedUsername = 'admin@example.com';
    const allowedPassword = 'admin123';

    if (username === allowedUsername && password === allowedPassword) {
      console.log("Attempting to sign in with:", username, password);

      try {
        // Sign in with email and password using Firebase auth
        await signInWithEmailAndPassword(auth, username, password);
        // Redirect to admin dashboard
        // Replace '/admin' with your desired admin dashboard route
        console.log("Authentication successful!");

        navigate('/admindashboard');
      } catch (error) {
        console.error(error);
        console.error("Authentication error:", error);

        // Set error message for login error
        setErrorMessage('Login failed. Please try again.');
      }
    } else {
      // Set error message for incorrect credentials.+
      
      setErrorMessage('Incorrect username or password');
    }
  };



  return (
    <div className="h-auto flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg"
      >
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center">
            <RiUserFill className="h-6 w-6 text-white" />
          </div>
        </div>
        
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Login
        </h2>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={handleUsernameChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={handlePasswordChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
         
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
