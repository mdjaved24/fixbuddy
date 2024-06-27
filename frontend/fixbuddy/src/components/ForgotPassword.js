import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loginbg from './Loginbg.jpg'

const loginBg={
  backgroundImage: `url(${Loginbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center', 
  backgroundRepeat: 'no-repeat',  
  width: '100%', 
  height: '100vh'
}


export default function ForgotPassword() {

    useEffect(() =>{
        document.title = 'Forgot Password';
      }, []);

    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [showQuestion, setShowQuestion] = useState(false);
    const [answerError, setAnswerError] = useState('');
    const [forgot, setForgot] = useState(true);
    const [reset, setReset] = useState(false);
    const navigate = useNavigate();

    const handleGetSecurityQuestion = async () => {
        try {
            const response = await axios.post('/api/password/getSecurityQuestion', { email, role });
            setSecurityQuestion(response.data.securityQuestion);
            setShowQuestion(true);
        } catch (error) {
            console.error('Error fetching security question:', error);
        }
    };

    const handleVerifySecurityAnswer = async () => {
        try {
            await axios.post('/api/password/verifySecurityAnswer', { email, role, securityAnswer });
            setForgot(false);
            setReset(true);
        } catch (error) {
            setAnswerError('Wrong Answer!')
            console.error('Error verifying security answer:', error);
        }
    };

    //Reset Password
      const [newPassword, setNewPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [error, setError] = useState('');
      const [successMsg, setSuccessMsg] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
          }
        try {
            await axios.post('/api/password/resetPassword', { email, role, newPassword });
            setError('');
            setSuccessMsg(true);
            setTimeout(() => {
              navigate('/Login');
           }, 1000);
        } catch (error) {
            console.error('Error resetting password:', error);
        }
    };

  return (
    <div  className='flex items-center justify-center' style={loginBg}>
      <div className='bg-white w-full sm:w-[90%] md:w-[70%] lg:w-1/2 xl:w-[25%] rounded-2xl flex flex-col items-center justify-center m-auto p-4'>
       
      <h1 className='font-sans font-medium text-4xl mt-6 mb-6'>Forgot Password</h1>
      <div className='flex flex-col items-center justify-center w-[90%]'>
      <label className='w-9/12 mb-2'>
        <h3 className='mt-4 mb-1 text-sm font-sans font-medium'>Email Address</h3>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required className='w-full h-9 p-1 rounded-md border border-gray-700'/>
      </label>
            </div>
            <div className="mb-4">
                <div className="mt-2 flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Role</span>
                    <div className="flex items-center">
                        <input type="radio" value="user" checked={role === 'user'} onChange={() => setRole('user')} id="role-user"
                            className="h-4 w-4 text-black focus:ring-black border-gray-300"/>
                        <label htmlFor="role-user" className="ml-2 block text-sm text-gray-700">
                            User
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" value="worker" checked={role === 'worker'} onChange={() => setRole('worker')}
                            id="role-worker" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"/>
                        <label htmlFor="role-tasker" className="ml-2 block text-sm text-gray-700">
                            Tasker
                        </label>
                    </div>
                </div>
            </div>
            {forgot&&(
            <>
            {showQuestion && (
                <>
                    <div className="mb-4 w-[67%]">
                        <label className="block mb-2 w-[75%]"><h3 className='mt-4 mb-1 text-sm font-sans font-medium'>Security Question</h3></label>
                        <p>{securityQuestion}</p>
                    </div>
                    <div className="mb-4 w-[67%]">
                        <label className="block mb-2 w-[75%]"><h3 className='mt-4 mb-1 text-sm font-sans font-medium'>Security Answer</h3></label>
                        <input
                            type="text"
                           className='w-full h-9 p-1 rounded-md border border-gray-700'
                            value={securityAnswer}
                            onChange={(e) => setSecurityAnswer(e.target.value)}
                        />
                    </div>
                    {answerError && <p className="text-red-500 mb-2">{answerError}</p>}
                    <button
                        className='bg-[#0D7A5F] text-white font-sans text-[1rem] w-[40%] p-2 rounded-full hover:cursor-pointer hover:bg-[#205043] mb-4'
                        onClick={handleVerifySecurityAnswer}
                    >
                        Submit
                    </button>
                </>
            )}
            {!showQuestion && (
                <button className='bg-[#0D7A5F] text-white font-sans text-[1rem] w-[60%] p-2 rounded-full hover:cursor-pointer hover:bg-[#205043] mb-4'
                    onClick={handleGetSecurityQuestion}>
                    Get Security Question
                </button>
            )}
              </>
        )}
        {reset&&(
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
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {successMsg && <p className="text-[#0D7A5F] mb-2">Password reset successfully !</p>}
            <button
              type="submit"
              className='bg-[#0D7A5F] text-white font-sans text-[1rem] w-[70%] p-2 rounded-full hover:cursor-pointer hover:bg-[#205043] mb-4'
            >
              Reset Password
            </button>
          </form>
        )}
    </div>
    </div>
  );
}
