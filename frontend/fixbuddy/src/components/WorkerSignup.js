import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
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


export default function WorkerSignup() {

useEffect(() =>{
    document.title = 'Become a Tasker';
}, []);

  const [formData, setFormData] = useState({
    name: '',
    countryCode: '',
    phone: '',
    email: '',
    password: '',
    houseNo: '',
    roadNo: '',
    locality: '',
    city: '',
    state: '',
    pincode: '',
    age: '',
    serviceArea: '',
    experience: '',
    securityQuestion:'',
    securityAnswer:''
});

const [selectedServices, setSelectedServices] = useState([]);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const [showErrorMessage, setShowErrorMessage] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

const options = [
  {
    label: 'Home Appliance Repair',
    options: [
      { value: 'Air Conditioner Repair', label: 'Air Conditioner Repair' },
      { value: 'Refrigerator Repair', label: 'Refrigerator Repair' },
      { value: 'Washing Machine Repair', label: 'Washing Machine Repair' },
      { value: 'Geyser Repair', label: 'Geyser Repair' },
      { value: 'Microwave Repair', label: 'Microwave Repair' },
    ],
  },
  {
    label: 'Home Maintenance Services',
    options: [
      { value: 'Plumbing Services', label: 'Plumbing Services' },
      { value: 'Electrical Services', label: 'Electrical Services' },
      { value: 'Cleaning Services', label: 'Cleaning Services' },
      { value: 'Renovation Services', label: 'Renovation Services' },
      { value: 'Garden Maintenance', label: 'Garden Maintenance' },
    ],
  },
  {
    label: 'Installation Services',
    options: [
      { value: 'Appliance Installation', label: 'Appliance Installation' },
      { value: 'Solar Panel Installation', label: 'Solar Panel Installation' },
      { value: 'Furniture Assembly', label: 'Furniture Assembly' },
      { value: 'Security System Installation', label: 'Security System Installation' },
      { value: 'Smart Home Setup', label: 'Smart Home Setup' },
    ],
  },
  {
    label: 'Vehicle Repair',
    options: [
      { value: 'Car Repair', label: 'Car Repair' },
      { value: 'Bike Repair', label: 'Bike Repair' },
    ],
  },
];

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleServiceChange = (selectedOptions) => {
  setSelectedServices(selectedOptions);
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('/api/worker/workerSignup',{
          name: formData.name,
          countryCode: formData.countryCode,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
          houseNo: formData.houseNo,
          roadNo: formData.roadNo,
          locality: formData.locality,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          age: formData.age,
          serviceArea: formData.serviceArea,
          experience: formData.experience,
          services: selectedServices.map(option => option.value),
          securityQuestion: formData.securityQuestion,
          securityAnswer: formData.securityAnswer,
        });

        console.log(formData);
        setShowSuccessMessage(true);
       setTimeout(() => {
         setShowSuccessMessage(true);
        // Redirect to homepage after showing success message
        navigate('/Homepage');
  }, 1000);
    } catch (error) {
        console.error('Error during worker registration:', error);
        setShowErrorMessage(true);
    }
};

  return (
    <div className='flex items-center justify-center' style={loginBg}>
    <div className='w-2/4 flex flex-col justify-center items-center bg-white rounded-2xl'>
    <h1 className='font-sans font-semibold text-5xl mt-6 mb-6'>Become a Tasker</h1>
    <form onSubmit={handleSubmit} className='w-full flex justify-center flex-col items-center'>
    <div className='w-[85%] bg-white rounded-2xl flex flex-row items-center justify-between m-auto'>
        {/* Personal Details */}
    <div className='w-[49%] flex flex-col items-center justify-center '>
    
    <label className='w-[95%] mb-5'>
      <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Enter Name' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label>
    
    <label className='w-[95%] mb-5 flex items-center justify-between'>
    <input type='text' name='countryCode' value={formData.countryCode} onChange={handleChange} placeholder='+91' required className='w-[25%] h-10 p-2 rounded-md border border-gray-700'/> 
    <input type='number' name='phone' value={formData.phone} onChange={handleChange} maxLength={10} minLength={10} placeholder='Phone number' required className='w-[74%] h-10 p-2 rounded-md border border-gray-700'/>
    </label>
    
    <label className='w-[95%] mb-5'>
      <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Email Address' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label>
    
    <label className='w-[95%] mb-5 relative'>
      <input  type={showPassword ? "text" : "password"} minLength={8} name="password" value={formData.password} onChange={handleChange} placeholder='Password' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
      <span onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}>
                      {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
                    </span>
    </label>

    {/* Address  */}
    <div className='w-[95%] mb-5 flex items-center justify-between'>
    <label className='w-[49%]'>
      <input type='text' name='houseNo' value={formData.houseNo} onChange={handleChange} placeholder='House no.' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label> 
    <label className='w-[49%]'>
      <input type='text' name='roadNo' value={formData.roadNo} onChange={handleChange} placeholder='Road no.' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label>
    </div>

    <div className='w-[95%] mb-5 flex items-center justify-between'>
    <label className='w-[49%]'>
      <input type='text' name='locality' value={formData.locality} onChange={handleChange} placeholder='Locality/Area' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label> 
    <label className='w-[49%]'>
      <input type='text' name='city'  value={formData.city} onChange={handleChange} placeholder='City' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label>
    </div>

    <div className='w-[95%] mb-5 flex items-center justify-between'>
    <label className='w-[68%]'>
      <input type='text' name='state' value={formData.state} onChange={handleChange} placeholder='State' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label> 
    <label className='w-[30%]'>
      <input type='number' name='pincode' value={formData.pincode} onChange={handleChange} placeholder='Pin Code' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label>
    </div>
    <label className='w-[95%] mb-5'>
      <input type='number' name='age' value={formData.age} onChange={handleChange} placeholder='Enter your age' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label>

  </div>
   {/* Professional details */}
    <div className='bg-white w-[49%] rounded-2xl flex flex-col items-center justify-center m-auto'>
    <select className='w-full h-10 p-2 rounded-md border border-gray-700 mb-3'
       name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} required>
                <option value="" disabled>Select a security question</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What was the name of your first pet?">What was the name of your first pet?</option>
                <option value="What was the name of the first school you attended?">What was the name of the first school you attended?</option>
                <option value="In what city were you born?">In what city were you born?</option>
                <option value="What is your favorite book?">What is your favorite book?</option>
                <option value="What is your favorite movie?">What is your favorite movie?</option>
                <option value="What is the name of your favorite teacher?">What is the name of your favorite teacher?</option>
                {/* <option value="What was the make and model of your first car?">What was the make and model of your first car?</option> */}
                <option value="What was the name of the street you grew up on?">What was the name of the street you grew up on?</option>
                <option value="What was your childhood nickname?">What was your childhood nickname?</option>
            </select>
            <input className='w-full h-10 p-2 rounded-md border border-gray-700 mb-3'  placeholder="Enter your security answer" required
               type="text" name="securityAnswer" value={formData.securityAnswer} onChange={handleChange}/>
            
    <label className="flex flex-col w-[95%]">
        <span>Services:</span>
        <Select isMulti value={selectedServices} onChange={handleServiceChange} options={options}
           className="basic-multi-select overflow-auto resize-none" classNamePrefix="select"
          menuPortalTarget={document.body}styles={{menuPortal: base => ({ ...base, zIndex: 9999 })}}/>
      </label>

    <label className='w-[95%] mt-4 mb-5'>
      <input type='text' name='serviceArea' value={formData.serviceArea} onChange={handleChange} placeholder='Service Area/Locality' required className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label>
    
      <select id="experience" name='experience' value={formData.experience} onChange={handleChange} className='w-[95%] mb-3 h-10 p-2 rounded-md border border-gray-700 '>
        <option value="" disabled>Select your experience</option>
        <option value="0-1">0-1 Years</option>
        <option value="1-3">1-3 Years</option>
        <option value="3-5">3-5 Years</option>
        <option value="5-10">5-10 Years</option>
        <option value="10+">10+ Years</option>
      </select>
    
    <label className='w-[95%] mb-5'>Upload your Resume/CV:
      <input type='file' placeholder='Resume' className='w-full h-10 p-2 rounded-md border border-gray-700'/>
    </label>
    </div>
  </div>
     <button type='submit' className='bg-[#0D7A5F] text-white font-sans text-lg w-[40%] p-2 rounded-full hover:cursor-pointer hover:bg-[#205043] mb-5 justify-center'>Register</button>
  </form>
  {showSuccessMessage && <p style={{ color: 'green' }} className='p-1 mb-4 -mt-4'>Signup successful!</p>}
  {showErrorMessage && <p style={{ color: 'red' }} className='p-1 mb-4 -mt-4'>User already exists!</p>}
  </div>
  </div>
  );
}
