import React from 'react'
import Loginbg from './Loginbg.jpg'

const loginBg={
  backgroundImage: `url(${Loginbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center', 
  backgroundRepeat: 'no-repeat',  
  width: '100%', 
  height: '100vh'
}

export default function Otp() {
  return (
    <div className='flex items-center justify-center' style={loginBg}>
      <div className='bg-white w-[28%] rounded-2xl flex flex-col items-center justify-center m-auto'>
      <h1 className='font-sans font-semibold text-7xl mt-8 mb-8'>fixbuddy</h1>

      <h1 className='font-sans font-normal text-2xl mt-4 mb-4'>Enter 6-digit OTP</h1>
     <lable>
        <input type="text" maxLength={6} className='w-64 h-10 text-center font-sans font-semibold text-xl pl-2 border-y-0 border-b-2 border-black mb-6 focus:outline-none'/>
     </lable>
      <button className='bg-[#0D7A5F] text-white font-sans text-lg w-[60%] p-2 rounded-full hover:cursor-pointer hover:bg-[#205043]   mb-8'>Confirm</button>

      <p className='mb-8'>Didn't recieve OTP yet? <a href='#' className='text-[#0D7A5F] font-sans font-medium hover:text-[#205043]'>Generate again</a></p>
    </div>
    </div>
  );
}
