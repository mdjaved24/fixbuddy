import React,{useEffect, useState} from 'react'
import TitleBar from '../components/TitleBar';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import Procedure from '../components/Procedure';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import Appliance_repair from './img/Homepage/Appliance_repair.jpg';
import Installation from './img/Homepage/Installation.jpg';
import Cleaning from './img/Homepage/Cleaning.jpg';
import Renovation from './img/Homepage/Renovation.jpg';
import vehiclerepair from './img/Homepage/vehiclerepair.jpg';
import Housemaintain from './img/Homepage/Housemaintain.jpg';
import Homebg from './img/Homepage/Homebg.png';
import Titlebg3 from '../components/img/Titlebg3.jpg'

const TitleBg={
    backgroundImage: `url(${Titlebg3})`,
    backgroundSize: 'cover',
      backgroundPosition: 'center center', 
      backgroundRepeat: 'no-repeat',  
      width: '100%', 
  }

const homeBg={
  backgroundImage: `url(${Homebg})`,
  backgroundSize: 'cover',
    backgroundPosition: 'center center', 
    backgroundRepeat: 'no-repeat',  
    width: '100%', 
    height: '100vh'
}

export default function Homepage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

     const toggleSidebar = () => {
       setIsSidebarOpen(!isSidebarOpen);
     };

     const closeSidebar = () => {
        setIsSidebarOpen(false);
      };
  useEffect(() =>{
    document.title = 'Homepage';
  }, []);

  return (
    <div>
       <Navbar toggleSidebar={toggleSidebar} />
         {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-green-900 text-white w-64 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar name='Md Javed' isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>
      
      <TitleBar TitleBg={TitleBg} title='Find Trusted Technicians and Service Providers Near You'/>

      <div style={homeBg} className='w-[100%]'>
      <h2 className='text-center font-sans text-[2.5rem] font-bold mt-10 mb-4 w-full text-[#2B4C32]'>What we offer?</h2>

      <div className='flex justify-evenly flex-wrap w-[70%] m-auto'>
      <Cards src={Appliance_repair} alt='Repair' title='Repair Service' description='Expert repair services for all your household appliances. '/>
      <Cards src={Installation} alt='Installation' title='Installation Service' description='Professional installation services for all your household appliances. '/>
      <Cards src={Cleaning} alt='Cleaning' title='Cleaning Service' description='Professional cleaning services to keep your home spotless and tidy'/>
      <Cards src={Renovation} alt='Renovation' title='Renovation Service' description='Transform your space with our professional renovation services.'/>
      <Cards src={vehiclerepair} alt='vehiclerepair' title='Vehicle Repair Service' description='Expert vehicle repair services to keep your car running smoothly.'/>
      <Cards src={Housemaintain} alt='House maintenance' title='House Maintenance' description='Reliable house maintenance services to keep your home in top condition.'/>
      </div>
      </div>

     <Procedure/>
     
      <h2 className='text-center font-sans text-[2.5rem] font-bold mt-10 mb-4 w-full text-[#2B4C32]'>What our happy customers say about us</h2>
      <div className='flex justify-evenly items-center mt-4 w-[80%] m-auto flex-wrap mb-6'>

        <Reviews name='Sameer Khan' rating='5' review='I recently used this platform for plumbing services and was very impressed. The plumber was professional, friendly, and did an excellent job fixing the leak in my bathroom. The whole process from booking to service completion was seamless. I will definitely use it again for any future needs.' service='Plumbing Services'/>

        <Reviews name='Vikram Singh' rating='5' review='I had an issue with my refrigerator and needed urgent repair. The technician arrived promptly and diagnosed the problem quickly. He had all the necessary parts and tools with him and fixed the refrigerator within an hour. The service was top-notch, and the technician was very courteous. I am extremely satisfied with the service' service='Refrigerator Repair'/>

        <Reviews name='Kiran Rao' rating='5' review='Finding a reliable housemaid has always been challenging, but this platform made it so much easier. The housemaid they connected me with is professional, punctual, and very thorough in her work. My house has never looked better. I appreciate the background checks and the ease of booking. Thank you!' service='Housemaid Services'/>

        <Reviews name='Arjun Sharma' rating='4' review='The technician was very professional and fixed my AC quickly. He explained the issue clearly and made sure everything was working perfectly before leaving. The booking process was also very smooth. I am very satisfied with the service and will definitely recommend it to others.' service='AC Repair'/>

        <Reviews name='Roshni Patel' rating='3' review='The electrician who came to fix the wiring issues in my house was very skilled. He identified the problem quickly and resolved it without any hassle. The booking process was easy, and the customer support was responsive. I am happy with the service, although the cost was slightly higher than expected.' service='Electrical Services'/>

        <Reviews name='Ashwin Kumar' rating='4' review='The mechanic service provided was very good. My car had some issues, and the mechanic who came over was very knowledgeable and efficient. He fixed the problem and also gave me some useful maintenance tips. The only downside was a slight delay in the arrival time, but overall, it was a positive experience.' service=' Mechanic Services'/>
      </div>
      <Footer/>
    </div>
  );
}
