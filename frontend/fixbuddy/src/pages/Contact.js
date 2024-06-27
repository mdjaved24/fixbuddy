import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import axios from 'axios';
import './raleway.css'

export default function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    createdAt: ''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const currDate = new Date().toString();
        const response = await axios.post('/api/queries/submitQuery',  { ...formData, createdAt: currDate });
        console.log(response.data);
        setShowSuccessMessage(true);
        setTimeout(() => {
           setShowSuccessMessage(false);
        }, 2000);
        setFormData({ name: '', phone: '', email: '', message: '', createdAt: '' });
    } catch (err) {
        console.error('Error submitting query:', err);
        alert('Error submitting query');
    }
};

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
     setIsSidebarOpen(false);
   };

  useEffect(() =>{
    document.title = 'Contact us';
  }, []);

  return (
    <div>
       <Navbar toggleSidebar={toggleSidebar} />
         {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-green-900 text-white w-64 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar name='Md Javed' isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>
      
      {/* Main Content */}
    <main className="py-10 bg-white">
      <section className="container mx-auto p-5 bg-white rounded-md w-[80%] flex flex-col lg:flex-row lg:space-x-10">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0" id="info">
          <h5 className="text-[2.8rem] raleway font-semibold mb-4">CONTACT INFO</h5>

          <div className="mb-6">
            <p className='font-sans'>At FixBuddy, we believe every home and office deserves top-notch maintenance and repair services. Let us be your trusted partner in keeping your spaces in perfect condition. From quick fixes to comprehensive renovations, our skilled technicians are ready to assist with any project. We take pride in delivering reliable, professional services that exceed your expectations.
            <br></br>
            <br></br>
             Feel free to reach out with any questions, inquiries, or suggestions. We value your feedback and are eager to help you find the best solutions for your needs. Use the contact form provided to get in touch, and we'll respond promptly. At FixBuddy, your convenience and peace of mind are our top priorities.</p>
          </div>

          <div className="address mb-6">
            <h6 className="text-lg font-semibold mb-2">ADDRESS</h6>
            <p>12A, Bistupur Main Road,</p>
            <p>Jamshedpur, Jharkhand</p>
            <p>831001</p>
            <p>India</p>
            <a href="mailto:support@fixbuddyhub.com" className="text-[#437c4f] text-[1.1rem] underline hover:text-black">support@fixbuddyhub.com</a>
          </div>

          <div className="phone mb-6">
            <h6 className="text-xl font-semibold mb-2 ">PHONE</h6>
            <p className='font-sans hover:cursor-pointer hover:text-[#437c4f] w-max'>0800-456-7890</p>
            <p className='font-sans hover:cursor-pointer hover:text-[#437c4f] w-max'>0657-234-6395</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2" id="contactform">
          <h5 className="text-[2.8rem] raleway font-semibold mb-4">CONTACT FORM</h5>
          <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder="Full Name" required
             className="w-[95%] p-2 h-[2.8rem] text-md mb-4 border rounded"/>

            <input type="text"  name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone no." required
            className="w-[95%] p-2 h-[2.8rem] text-md mb-4 border rounded"/>

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail Address" required
            className="w-[95%] p-2 h-[2.8rem] text-md mb-4 border rounded"/>

            <textarea  name="message" value={formData.message} onChange={handleChange} id="message" placeholder="Message" required
             style={{resize: 'none'}} className="w-[95%] h-[8rem] p-2 mb-4 border rounded"></textarea>

            <button type="submit" id="submitform" className="w-[20%] p-2 bg-[#0D7A5F] hover:cursor-pointer hover:bg-[#205043] text-white rounded">Submit</button>
            {showSuccessMessage && <p style={{ color: 'green' }} className='p-1'>Query submitted successfully!</p>}
          </form>
        </div>
      </section>
    </main>
    <Footer/>
    </div>
  );
}