import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loginbg from './Loginbg.jpg'

const loginBg={
  backgroundImage: `url(${Loginbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center', 
  backgroundRepeat: 'no-repeat',  
  width: '100%', 
  height: '100vh'
}


const ShowPasswordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>
);

const HidePasswordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
  <path d="M3 3l18 18" />
</svg>
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() =>{
    document.title = 'Login';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login/logIn', { email, password, role });
      console.log(response.data);
          setShowSuccessMessage(true);
         setTimeout(() => {
           setShowSuccessMessage(true);
           setShowErrorMessage('');
           if(role === 'admin'){
            // Redirect to admin homepage after showing success message
           navigate('/AdminHome');
           }else{
              // Redirect to homepage after showing success message
              navigate('/Homepage');
           }
          
        }, 1000);
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setShowErrorMessage(true);
     }, 1000);
    }
  };

  // Clear the error message when the user starts typing
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setShowErrorMessage('');
  };

  return (
    <div className='flex items-center justify-center' style={loginBg}>
      <div className='bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[40%] xl:w-1/3 rounded-2xl flex flex-col items-center justify-center m-auto'>
      <h1 className='font-sans font-semibold text-5xl mt-8 mb-8'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>

      <label className='w-9/12 mb-2'>
        <h3 className='mt-4 mb-1 text-sm font-sans font-medium'>Email Address</h3>
        <input type='text' value={email} onChange={handleInputChange(setEmail)} placeholder='Email Address' required className='w-full h-9 p-1 rounded-md border border-gray-700'/>
      </label>
      
      <label className='w-9/12 mb-2'>
        <h3 className='mt-4 mb-1 text-sm font-sans font-medium'>Password</h3>
        <div style={{ position: 'relative' }}>
        <input type={showPassword ? 'text' : 'password'} value={password}  onChange={handleInputChange(setPassword)} minLength={8} placeholder='Password' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
        <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }}
                    >
                        {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
                    </span>
                  </div>
      </label>

      <div className="mb-4">
                <div className="mt-2 flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Role</span>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            value="user"
                           checked={role === 'user'}
                           onChange={() => setRole('user')}
                            id="role-user"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                        <label htmlFor="role-user" className="ml-2 block text-sm text-gray-700">
                            User
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            value="worker"
                            checked={role === 'worker'}
                            onChange={() => setRole('worker')}
                            id="role-worker"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <label htmlFor="role-tasker" className="ml-2 block text-sm text-gray-700">
                            Tasker
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            value="admin"
                            checked={role === 'admin'}
                            onChange={() => setRole('admin')}
                            id="role-admin"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <label htmlFor="role-admin" className="ml-2 block text-sm text-gray-700">
                            Admin
                        </label>
                    </div>
                </div>
            </div>

      <Link to='/ForgotPassword' className='text-[#0D7A5F] font-sans font-medium hover:text-[#205043] mb-4'>Forgot Password?</Link>

      <button type='submit' className='bg-[#0D7A5F] text-white font-sans text-lg w-9/12 p-2 rounded-full hover:cursor-pointer hover:bg-[#205043] mb-4'>Login</button>
      {showSuccessMessage && <p style={{ color: 'green' }} className='p-1'>Login successful!</p>}
      {showErrorMessage && <p style={{ color: 'red' }} className='p-1'>Invalid credentials!</p>}
  </form>

      <p className='mb-8'>Don't have an account? <Link to='/Signup' className='text-[#0D7A5F] font-sans font-medium hover:text-[#205043]'>Signup</Link></p>
    </div>
    </div>
  );
}
