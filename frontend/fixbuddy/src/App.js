import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './pages/Landingpage';
import ServiceCategory from './pages/ServiceCategory';
import Contact from './pages/Contact';
import Login_Signuphome from './components/Login_Signuphome';
import Login from './components/Login';
import Signup from './components/Signup';
import WorkerSignup from './components/WorkerSignup';
import WorkersListPage from './pages/WorkersListPage';
import Homepage from './pages/Homepage';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Login_Signuphome" element={<Login_Signuphome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/WorkerSignup" element={<WorkerSignup />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route exact path='/ServiceCategory' element={<ServiceCategory/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route path="/workers-list/:serviceCategory" element={<WorkersListPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
