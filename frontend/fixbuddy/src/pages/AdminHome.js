import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Footer from '../components/Footer';
import TitleBar from '../components/TitleBar';
import Titlebg3 from '../components/img/Titlebg3.jpg'

const TitleBg={
    backgroundImage: `url(${Titlebg3})`,
    backgroundSize: 'cover',
      backgroundPosition: 'center center', 
      backgroundRepeat: 'no-repeat',  
      width: '100%', 
  }

export default function AdminHome() {
  const [queries, setQueries] = useState([]);

    useEffect(() => {
      document.title = 'Admin Panel';
        fetchQueries();
    }, []);

    const fetchQueries = async () => {
      try {
          const response = await axios.get('/api/admin/queries');
          setQueries(response.data);
      } catch (error) {
          console.error('Error fetching queries:', error);
      }
  };

  const deleteQuery = async (id) => {
      try {
          await axios.delete(`/api/admin/queries/${id}`);
          setQueries(queries.filter(query => query._id !== id));
      } catch (error) {
          console.error('Error deleting query:', error);
      }
  };

      {/* Navbar  */}
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout=() =>{
    console.log("User logged out");
    navigate('/');
    setShowLogoutDialog(false);
  }

  return (
    <>
      <nav className='border-b-[#c7cbd1] border border-solid flex py-2'>
      <button className='w-[4rem] ml-4 hover:text-black rounded-md px-2 py-1 text-[1.2rem] text-[#2B4C32]' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
           <path d="M4 6l16 0" />
           <path d="M4 12l16 0" />
           <path d="M4 18l16 0" />
         </svg></button>  

        <div className='w-[90%] ml-8 flex justify-between items-center content-center'>
        <div>
         <Link to='/AdminHome' className="font-sans text-[1.3rem] hover:text-[#0D7A5F] antialiased font-medium mr-6">Home</Link>
        <Link to='/ServiceCategory' className="font-sans text-[1.3rem] hover:text-[#0D7A5F] antialiased font-medium mr-6">Services</Link>
        {/* <Link to='/Contact' className="font-sans text-[1.3rem] hover:text-[#0D7A5F] antialiased font-medium mr-6">Contact Us</Link> */}
        </div>

        <div className='w-max mr-4 justify-evenly items-center'>
        <button onClick={() => setShowLogoutDialog(true)} className='border-2 border-solid border-red-900 hover:border-black hover:text-black rounded-md px-2 py-1 text-[1.2rem] text-red-900'>Logout</button> 

          {/* Show dialog box when user clicks logout button */}
          {showLogoutDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4 font-medium text-black">Confirm Logout</h2>
            <p className="mb-4 text-black">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowLogoutDialog(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
              <button onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
            </div>
          </div>
        </div>
      )}

        </div>
        </div>
      </nav>
      <TitleBar TitleBg={TitleBg} title='Manage the tasker and users'/>
      <div className='container w-[90%] m-auto '>

      
      <h2 className='text-center font-sans text-[2.5rem] font-bold mt-10 mb-4 w-full text-[#2B4C32]'>Queries</h2>
      <div className=" w-full ">
      {queries.length === 0 ? (
         <div className="flex flex-col items-center justify-center h-64">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-9-3a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L9 10.586V7z" clipRule="evenodd" />
         </svg>
         <p className="text-gray-500 text-xl font-medium">No Queries</p>
     </div>
      ) : (
        <div className="space-y-6 mb-2 w-full">
        {queries.map((query) => (
          <div key={query._id} className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-auto md:flex-1">
              <h2 className="text-xl font-semibold mb-2">Name: {query.name}</h2>
              <ul className="list-none">
                <li className="text-gray-700"><span className="font-semibold">Phone no:</span> {query.phone}</li>
                <li className="text-gray-700"><span className="font-semibold">Email:</span> {query.email} </li>
                <li className="text-gray-700"><span className="font-semibold">Query:</span> {query.message} </li>
                <li className="text-gray-700"><span className="font-semibold">Time:</span> {query.createdAt} </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <button className="mt-2 bg-[#c63434] text-white py-2 px-4 rounded-lg hover:bg-[#962b2b]" 
               onClick={() => deleteQuery(query._id)}>Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
      </div>
      </div>
    <Footer/>
</>
);
}
