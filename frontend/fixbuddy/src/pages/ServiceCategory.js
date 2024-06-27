import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TitleBar from '../components/TitleBar'
import Cards from '../components/Cards'
import Servicecategory from './img/Service/Servicecategory.jpg'

import AC from './img/Service/AC.jpg'
import Refrigerator from './img/Service/Refrigerator.png'
import WashingMachine from './img/Service/WashingMachine.png'
import Microwave from './img/Service/Microwave.png'
import Plumbing from './img/Service/Plumbing.png'
import Electrical from './img/Service/Electrical.png'
import Garden from './img/Service/Garden.png'
import Cleaning from './img/Service/Cleaning.jpg'
import Renovation from './img/Service/Renovation.jpg'
import geyser from './img/Service/geyser.webp'
import appliance from './img/Service/appliance.png'
import Solar from './img/Service/Solar.jpg'
import furniture from './img/Service/furniture.png'
import security from './img/Service/security.png'
import smarthome from './img/Service/smarthome.png'
import car from './img/Service/car.png'
import bike from './img/Service/bike.jpg'

const TitleBg={
    backgroundImage: `url(${Servicecategory})`,
    backgroundSize: 'cover',
      backgroundPosition: 'center center', 
      backgroundRepeat: 'no-repeat',  
      width: '100%', 
  }

export default function ServiceCategory() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
     setIsSidebarOpen(false);
   };

  useEffect(() =>{
    document.title = 'Categories';
  }, []);

  return (
    <div>
       <Navbar toggleSidebar={toggleSidebar} />
         {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-green-900 text-white w-64 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar name='Md Javed' isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>
      
      <TitleBar TitleBg={TitleBg} title='Find Trusted Professionals for Every Need'/>
      {/* Categories */}
      <div className='container w-[90%] m-auto'>

      <div className="font-sans w-full mt-6">
      <h1 className="text-4xl font-semibold mt-4">Home appliance repair</h1>
      <p className="text-lg mb-4">Get your home appliances repaired by trusted professionals</p>
      <div className='flex flex-wrap justify-evenly'>
      <Link to="/workers-list/Air%20Conditioner%20Repair" className="card-link">
        <Cards src={AC} title='Air Conditioner repair'/>
        </Link>

      <Link to="/workers-list/Refrigerator%20Repair" className="card-link">
      <Cards src={Refrigerator} title='Refrigerator repair'/>
        </Link>

      <Link to="/workers-list/Washing%20Machine%20Repair" className="card-link">
      <Cards src={WashingMachine} title='Washing Machine repair'/>
        </Link>

      <Link to="/workers-list/Geyser%20Repair" className="card-link">
      <Cards src={geyser} title='Geyser repair'/>
        </Link>

      <Link to="/workers-list/Microwave%20Repair" className="card-link">
      <Cards src={Microwave} title='Microwave repair'/>
        </Link>
      </div>
    </div>

      <div className="font-sans w-full mt-6">
      <h1 className="text-4xl font-semibold mt-4">Home Maintenance Services</h1>
      <p className="text-lg mb-4">Maintain your home's perfection with our reliable services.</p>
      <div className='flex flex-wrap justify-evenly'>
      <Link to="/workers-list/Plumbing%20Services" className="card-link">
      <Cards src={Plumbing} title='Plumbing Services'/>
        </Link>
       
      <Link to="/workers-list/Electrical%20Services" className="card-link">
      <Cards src={Electrical} title='Electrical Services'/>
        </Link>
       
      <Link to="/workers-list/Cleaning%20Services" className="card-link">
      <Cards src={Cleaning} title='Cleaning Services'/>
        </Link>
       
      <Link to="/workers-list/Renovation%20Services" className="card-link">
      <Cards src={Renovation} title='Renovation Services'/>
        </Link>
       
      <Link to="/workers-list/Garden%20Maintenance" className="card-link">
      <Cards src={Garden} title='Garden Maintenance'/>
        </Link>
       
      </div>
    </div>

      <div className="font-sans w-full mt-6">
      <h1 className="text-4xl font-semibold mt-4">Installation Services</h1>
      <p className="text-lg mb-4">Expert installations for a seamless setup</p>
      <div className='flex flex-wrap justify-evenly'>
      <Link to="/workers-list/Appliance%20Installation" className="card-link">
      <Cards src={appliance} title='Appliance Installation'/>
        </Link>
       
      <Link to="/workers-list/Solar%20Panel%20Installation" className="card-link">
      <Cards src={Solar} title='Solar Panel Installation'/>
        </Link>
       
      <Link to="/workers-list/Furniture%20Assembly" className="card-link">
      <Cards src={furniture} title='Furniture Assembly'/>
        </Link>
       
      <Link to="/workers-list/Security%20System%20Installation" className="card-link">
      <Cards src={security} title='Security System Installation'/>
        </Link>
       
      <Link to="/workers-list/Smart%20Home%20Setup" className="card-link">
      <Cards src={smarthome} title='Smart Home Setup'/>
        </Link>
      </div>
    </div>

      <div className="font-sans w-full mt-6">
      <h1 className="text-4xl font-semibold mt-4">Vehicle Repair</h1>
      <p className="text-lg mb-4">Keep your vehicle running smoothly with our expert repair services</p>
      <div className='flex flex-wrap justify-start'>
      <Link to="/workers-list/Car%20Repair" className="card-link">
      <Cards src={car} title='Car Repair'/>
        </Link>

      <Link to="/workers-list/Bike%20Repair" className="card-link">
      <Cards src={bike} title='Bike Repair'/>
        </Link>
      </div>
    </div>
      </div>
      <Footer/>
    </div>
  );
}
