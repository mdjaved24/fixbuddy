import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Loginbg from './Loginbg.jpg'

const loginBg={
  backgroundImage: `url(${Loginbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center', 
  backgroundRepeat: 'no-repeat',  
  width: '100%', 
  height: '100vh'
}

const ResetPassword = () => {
    useEffect(() =>{
        document.title = 'Reset Password';
      }, []);

      const [newPassword, setNewPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();
      const location = useLocation();

     // Destructure email and role from location.state with default values
  const { email = '', role = '' } = location.state || {};

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
          }

        try {
            await axios.post('/api/password/resetPassword', { email, role, newPassword });
            alert('Password reset successfully');
            navigate('/Login');
        } catch (error) {
            console.error('Error resetting password:', error);
        }
    };

    return (
        <div className='flex items-center justify-center' style={loginBg}>
      <div className='bg-white w-1/3 rounded-2xl flex flex-col items-center justify-center m-auto'>
      <h1 className='font-sans font-medium text-4xl mt-6 mb-6'>Reset Password</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-gray-700 mb-2">New Password</label>
            <input
              type="text"
              minLength={8}
              id="new-password"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className='bg-[#0D7A5F] text-white font-sans text-[1rem] w-[70%] p-2 rounded-full hover:cursor-pointer hover:bg-[#205043] mb-4'
          >
            Reset Password
          </button>
        </form>
    </div>
    </div>
    );
};

export default ResetPassword;
