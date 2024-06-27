import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import Bg from './Bg.png';
import IconsCard from '../components/IconsCard';
import repair from './img/repair.png';
import plumbing from './img/plumbing.png';
import electrical from './img/electrical.png';
import car_repair from './img/car_repair.png';
import carpenter from './img/carpenter.png';
import home_repair from './img/home_repair.png';
import housekeeping from './img/housekeeping.png';

const landBg={
  backgroundImage: `url(${Bg})`,
  backgroundSize: 'cover',
    backgroundPosition: 'center center', 
    backgroundRepeat: 'no-repeat',  
    width: '100%', 
    height: '90.6vh'
}

export default function Landingpage() {
  useEffect(() =>{
    document.title = 'fixbuddy';
  }, []);

  return (
    <>
      <nav className='border-b-[#c7cbd1] border border-solid flex justify-between content-center'>
        <h1 className='w-64 font-mono font-bold text-[#2B4C32] text-[2.5rem] ml-32 mt-1'>fixbuddy</h1>
        <div className='w-96 mr-8 pt-4 justify-evenly'>
        <Link to='/Login_Signuphome' className="font-mono text-[1.3rem] hover:text-[#0D7A5F] antialiased font-semibold mr-6">Login/Signup</Link>
              <Link to='/WorkerSignup' className="border-2 border-solid border-[#0D7A5F] hover:border-black hover:text-black rounded-md px-2 py-1 text-[1.2rem] text-[#0D7A5F]">Become a Tasker</Link>
        </div>
      </nav>
      <main className='w-full' style={landBg} >
        <div className='flex justify-center items-center flex-col'>
          <h1 className='font-sans font-[750] text-center text-[#2B4C32] text-6xl pt-12'>Find reliable help<br></br> for every home task</h1>
          <p className='font-sans text-center w-3/4 m-auto mt-4 text-[500] text-lg'> From gadget repairs to household maintenance, our platform connects you with trusted professionals near you. Say goodbye to hassle and hello to convenience with our easy-to-use interface and reliable service providers. Get it done swiftly and securely, with our platform.</p>
          <Link to='/Login_Signuphome' className='mt-4 w-24 border-2 border-solid border-[#0D7A5F] hover:border-[#0D7A5F] hover:bg-[#0D7A5F] hover:text-white rounded-full px-2 py-1 text-[1.2rem] text-[#0D7A5F] text-center'><h5>Explore</h5></Link>
        </div>
          {/* Our Services */}
          <div className='mt-4'>
             <h2 className='text-center  mt-8 mb-6 font-sans font-[600] text-4xl'>Our Services</h2>
          <div className='items-center justify-evenly flex flex-row'>
             <IconsCard src={repair} alt="repair" title="Gadget Repair"></IconsCard>
             <IconsCard src={plumbing} alt="plumbing" title="Plumbing Service"></IconsCard>
             <IconsCard src={electrical} alt="electrical" title="Electrical Service"></IconsCard>
             <IconsCard src={car_repair} alt="car_repair" title="Vehicle repair Service"></IconsCard>
             <IconsCard src={carpenter} alt="carpenter" title="Carpenter Service"></IconsCard>
             <IconsCard src={housekeeping} alt="housekeeping" title="Housekeeping Service"></IconsCard>
             <IconsCard src={home_repair} alt="home_repair" title="Home repair Service"></IconsCard>
          </div>
          </div>
      </main>
    </>
  );
}
