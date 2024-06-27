import React, {useEffect} from 'react';
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

export default function Login_Signuphome() {
  useEffect(() =>{
    document.title = 'Login/Signup';
  }, []);

  return (
    <div className='flex items-center justify-center' style={loginBg}>
    <div className='bg-white w-1/3 rounded-2xl flex flex-col items-center justify-center m-auto'>
      <h1 className='font-sans font-semibold text-7xl mt-8 mb-8'>fixbuddy</h1>
      <Link to='/Signup' className='bg-[#0D7A5F] text-white font-sans text-lg w-9/12 p-2 rounded-full hover:cursor-pointer hover:bg-[#205043] text-center'>Signup</Link>
      <Link to='/Login' className='font-sans text-lg w-9/12 p-2 rounded-full border-2 border-solid border-[#0D7A5F] hover:border-[#205043] hover:text-[#205043] px-2 py-1 text-[1.2rem] text-[#0D7A5F] font-medium my-6 text-center'>Login</Link>

      <p className='w-9/12 text-center mt-4 mb-8'>By signing up you agree to our <strong className='text-[#0D7A5F] '>Terms of Use</strong> and <strong className='text-[#0D7A5F]'>Privacy Policy.</strong></p>
    </div>
    </div>
  );
}
