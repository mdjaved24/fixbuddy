// WorkersListPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const WorkersListPage = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { serviceCategory } = useParams(); // Get service category from URL parameter

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
     setIsSidebarOpen(false);
   };

   useEffect(() => {
    document.title=serviceCategory;
    const fetchWorkers = async () => {
      try {
        const response = await axios.get(`/api/worker-services/${encodeURIComponent(serviceCategory)}`);
        setWorkers(response.data);
        console.log(serviceCategory);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching workers:', error.message);
      }
    };
    fetchWorkers();
  }, [serviceCategory]);

  const handleCallNow = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
    console.log(`Calling ${phoneNumber}`);
};

  if (loading) {
    return <LoadingSpinner/>;
  }

  return (
    <div className="container mx-auto">
       <Navbar toggleSidebar={toggleSidebar} />
         {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-green-900 text-white w-64 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar name='Md Javed' isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>

      <div className='container w-[90%] m-auto '>
      <h2 className="text-4xl text-[#2B4C32] font-semibold mt-4 mb-3">{serviceCategory}</h2>
      <div className=" w-full ">
      {workers.length === 0 ? (
         <div className="flex flex-col items-center justify-center h-64">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-9-3a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L9 10.586V7z" clipRule="evenodd" />
         </svg>
         <p className="text-gray-500 text-xl font-medium">No taskers found for {serviceCategory}</p>
     </div>
      ) : (
        <div className="space-y-6 mb-2 w-full">
        {workers.map((worker, index) => (
          <div key={index} className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-auto md:flex-1">
              <h2 className="text-xl font-semibold mb-2">{worker.name}</h2>
              <ul className="list-none">
                <li className="text-gray-700"><span className="font-semibold">Age:</span> {worker.age}</li>
                <li className="text-gray-700"><span className="font-semibold">Experience:</span> {worker.experience} years</li>
                <li className="text-gray-700"><span className="font-semibold">Service Area:</span> {worker.serviceArea}</li>
                <li className="text-gray-700"><span className="font-semibold">Services Offered:</span> {worker.services.join(', ')}</li>
              </ul>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <p className="text-gray-700"><span className="font-semibold">Phone:</span> {worker.phone}</p>
              <button className="mt-2 bg-[#0D7A5F] text-white py-2 px-4 rounded-lg hover:bg-[#1f4e36]" 
              onClick={handleCallNow}>Call Now
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default WorkersListPage;
