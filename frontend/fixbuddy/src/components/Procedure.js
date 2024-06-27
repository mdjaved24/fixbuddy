import React from 'react'

import Step1 from './img/Step1.png';
import Step2 from './img/Step2.png';
import Step3 from './img/Step3.png';
import Step4 from './img/Step4.webp';

export default function Procedure() {
  return (
      <div className="how-it-works bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">How Fixbuddy Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img src={Step1} alt="Step 1" className="mx-auto mb-4" />
              <p className="text-lg font-semibold">Go to categories page or Search for the service you need</p>
            </div>
            <div className="text-center">
              <img src={Step2} alt="Step 2" className="mx-auto mb-4" />
              <p className="text-lg font-semibold">Click on the service you need</p>
            </div>
            <div className="text-center">
              <img src={Step3} alt="Step 3" className="mx-auto mb-4" />
              <p className="text-lg font-semibold">Choose from the list of available Taskers.</p>
            </div>
            <div className="text-center">
              <img src={Step4} alt="Step 4" className="mx-auto mb-4" />
              <p className="text-lg font-semibold">Dial the number and get it done!</p>
            </div>
          </div>
        </div>
      </div>
  );
}
