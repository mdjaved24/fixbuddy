import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import './Spinner.css';

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

export default function Signup() {
  useEffect(() =>{
    document.title = 'Signup';
  }, []);
  
    const [name, setName] = useState('');
    const [countryCode, setCountryCode] = useState([]);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [roadNo, setRoadNo] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [securityQuestion, setsecurityQuestion] = useState('');
    const [securityAnswer, setsecurityAnswer] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.post('/api/users/signup', {
              name,
              countryCode,
              phone,
              email,
              password,
              houseNo,
              roadNo,
              locality,
              city,
              state,
              pinCode,
              securityQuestion,
              securityAnswer
          });
          console.log(res.data);
          setShowSuccessMessage(true);
         setTimeout(() => {
           setShowSuccessMessage(true);
          // Redirect to homepage after showing success message
          navigate('/Homepage');
    }, 1000);
          // navigate('/Homepage');
      } catch (err) {
          console.error(err);
          setShowErrorMessage(true);
      }
  };

  return (
    <div className='flex items-center justify-center' style={loginBg}>
      <form onSubmit={handleSubmit} className='bg-white w-full sm:w-[90%] md:w-[70%] lg:w-1/2 xl:w-1/3 rounded-2xl flex flex-col items-center justify-center m-auto'>
      <h1 className='font-sans font-semibold text-5xl mt-4 mb-6'>Signup</h1>
      
      <label className='w-9/12 mb-3'>
        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      </label>
      
      <label className='w-9/12 mb-3 flex items-center justify-between'>
        <input type='text' name='countryCode' value={countryCode} onChange={(e) => setCountryCode(e.target.value)} placeholder='+91' required className='w-[25%] h-10 p-2 rounded-md border border-gray-700'/> 
        <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={10} minLength={10} placeholder='Phone number' required className='w-[74%] h-10 p-2 rounded-md border border-gray-700'/>
      </label>
      
      <label className='w-9/12 mb-3'>
        <input type='text' name='name' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      </label>
      
      <label className='w-9/12 mb-3'>
      <div style={{ position: 'relative' }}>
        <input type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} placeholder='Password' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
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

      {/* Address  */}
      <div className='w-9/12 mb-3 flex items-center justify-between'>
      <label className='w-[49%]'>
        <input type='text' name='houseNo' value={houseNo} onChange={(e) => setHouseNo(e.target.value)} placeholder='House no.' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      </label> 
      <label className='w-[49%]'>
        <input type='text' name='roadNo' value={roadNo} onChange={(e) => setRoadNo(e.target.value)} placeholder='Road no.' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      </label>
      </div>

      <div className='w-9/12 mb-3 flex items-center justify-between'>
      <label className='w-[49%]'>
        <input type='text' name='locality' value={locality} onChange={(e) => setLocality(e.target.value)} placeholder='Locality/Area' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      </label> 
      <label className='w-[49%]'>
        <input type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      </label>
      </div>

      <div className='w-9/12 mb-3 flex items-center justify-between'>
      <label className='w-[68%]'>
        <input type='text' name='state' value={state} onChange={(e) => setState(e.target.value)} placeholder='State' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      </label> 
      <label className='w-[30%]'>
        <input type='number' name='pinCode'  value={pinCode} onChange={(e) => setPinCode(e.target.value)} placeholder='Pin Code' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      </label>
      </div>

      <select className='w-9/12 h-10 p-2 rounded-md border border-gray-700 mb-3'
                name="securityQuestion"
                value={securityQuestion}
                onChange={(e) => setsecurityQuestion(e.target.value)}
                required
            >
                <option value="" disabled>Select a security question</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What was the name of your first pet?">What was the name of your first pet?</option>
                <option value="What was the name of the first school you attended?">What was the name of the first school you attended?</option>
                <option value="In what city were you born?">In what city were you born?</option>
                <option value="What is your favorite book?">What is your favorite book?</option>
                <option value="What is your favorite movie?">What is your favorite movie?</option>
                <option value="What is the name of your favorite teacher?">What is the name of your favorite teacher?</option>
                <option value="What was the make and model of your first car?">What was the make and model of your first car?</option>
                <option value="What was the name of the street you grew up on?">What was the name of the street you grew up on?</option>
                <option value="What was your childhood nickname?">What was your childhood nickname?</option>
            </select>
            <input className='w-9/12 h-10 p-2 rounded-md border border-gray-700 mb-3'
                type="text"
                name="securityAnswer"
                value={securityAnswer}
                onChange={(e) => setsecurityAnswer(e.target.value)}
                placeholder="Enter your security answer"
                required
            />

      <button type='submit' className='bg-[#0D7A5F] text-white font-sans text-lg w-9/12 p-2 rounded-full hover:cursor-pointer hover:bg-[#205043] mb-3'>Create Account</button>

      <p className='mb-3'>Already a user? <Link to='/Login' className='text-[#0D7A5F] font-sans font-medium hover:text-[#205043]'>Login</Link></p>
      {showSuccessMessage && <p style={{ color: 'green' }} className='p-1 -mb-2'>Signup successful!</p>}
      {showErrorMessage && <p style={{ color: 'red' }} className='p-1'>User already exists!</p>}
    </form>
    </div>
  );
}
