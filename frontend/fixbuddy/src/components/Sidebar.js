import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar({name, isOpen,closeSidebar}) {
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout=() =>{
    console.log("User logged out");
    navigate('/');
    setShowLogoutDialog(false);
  }

  return (
    <div className={`fixed top-0 left-0 h-full bg-[#0D7A5F] text-white w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Close button */}
      <div className="p-4 flex justify-end">
        <button
          className="text-white focus:outline-none"
          onClick={closeSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.707 6.293a1 1 0 011.414 0L10 8.586l1.879-1.88a1 1 0 111.414 1.415L11.414 10l1.88 1.879a1 1 0 11-1.415 1.414L10 11.414l-1.879 1.88a1 1 0 01-1.414-1.415L8.586 10 6.707 8.121a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Profile section */}
      <div className="p-4">
        <div className="flex items-center mb-8">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{name}</h2>
          </div>
        </div>

        {/* Navigation links */}
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="#" className="flex items-center text-md hover:opacity-85">
                View Profile
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/Homepage" className="flex items-center text-md hover:opacity-85">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/ServiceCategory" className="flex items-center text-md hover:opacity-85">
                Categories
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/Contact" className="flex items-center text-md hover:opacity-85">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <button onClick={() => setShowLogoutDialog(true)} className="flex items-center text-md hover:opacity-85">
                Logout
              </button>
            </li>
          </ul>
        </nav>
          {/* Show dialog box when user clicks logout button */}
          {showLogoutDialog && (
        <div className="inset-0 mt-[-5rem] ml-[50rem] relative flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-[55rem] p-8 rounded shadow-lg">
            <h2 className="text-[1.5rem] mb-4 font-medium text-black">Confirm Logout</h2>
            <p className="mb-4 text-xl text-black">Are you sure you want to logout?</p>
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
  );
}
