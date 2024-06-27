import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({toggleSidebar}) {
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout=() =>{
    console.log("User logged out");
    navigate('/');
    setShowLogoutDialog(false);
  }

  return (
    <div>
      <nav className='border-b-[#c7cbd1] border border-solid flex py-2'>
      <button className='w-[4rem] ml-4 hover:text-black rounded-md px-2 py-1 text-[1.2rem] text-[#2B4C32]' onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
           <path d="M4 6l16 0" />
           <path d="M4 12l16 0" />
           <path d="M4 18l16 0" />
         </svg></button>  

        <div className='w-[90%] ml-8 flex justify-between items-center content-center'>
        <div>
         <Link to='/Homepage' className="font-sans text-[1.3rem] hover:text-[#0D7A5F] antialiased font-medium mr-6">Home</Link>
        <Link to='/ServiceCategory' className="font-sans text-[1.3rem] hover:text-[#0D7A5F] antialiased font-medium mr-6">Categories</Link>
        <Link to='/Contact' className="font-sans text-[1.3rem] hover:text-[#0D7A5F] antialiased font-medium mr-6">Contact Us</Link>
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
    </div>
  );
}
