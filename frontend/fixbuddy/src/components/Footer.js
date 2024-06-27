import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout=() =>{
    console.log("User logged out");
    navigate('/');
    setShowLogoutDialog(false);
  }

  return (
    <footer className="bg-[#67727e] text-white mt-4 py-12 px-6 font-sans font-[600]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">FixBuddy</h2>
          <p>
            Your one-stop solution for all repair and maintenance services. We connect you with trusted professionals to handle all your needs.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><Link to="/Homepage" className="hover:opacity-80">Home</Link></li>
            <li className="mb-2"><Link to="/ServiceCategory" className="hover:opacity-80">Categories</Link></li>
            <li className="mb-2"><Link to="/Contact" className="hover:opacity-80">Contact Us</Link></li>
            <li className="mb-2"><Link to="#about" className="hover:opacity-80">About Us</Link></li>
            <li><button onClick={() => setShowLogoutDialog(true)} className="hover:opacity-80">Logout</button></li>
          </ul>
        </div>
       {/* Show dialog box when user clicks logout button */}
       {showLogoutDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4 font-medium text-black">Confirm Logout</h2>
            <p className="mb-4 font-medium text-black">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowLogoutDialog(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">Cancel</button>
              <button onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
            </div>
          </div>
        </div>
      )}
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p>Email: <Link to="mailto:support@fixbuddy.com" className="underline">support@fixbuddyhub.com</Link></p>
          <p>Phone: <Link to="tel:+1234567890" className="underline">(123) 456-7890</Link></p>
          <p>Address: 12A, Bistupur Main Road, Jamshedpur, Jharkhand, 831001, India</p>
        </div>
        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">

            <Link to="https://facebook.com" className="text-2xl hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg></Link>

            <Link to="https://twitter.com" className="text-2xl hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
           </svg></Link>

            <Link to="https://instagram.com" className="text-2xl hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
            </svg></Link>

            <Link to="https://linkedin.com" className="text-2xl hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>© 2024 Fixbuddy. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  );
}
