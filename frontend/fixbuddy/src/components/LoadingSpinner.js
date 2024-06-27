import React from 'react'

export default function LoadingSpinner() {
    const spinnerStyle = {
        borderTopColor: '#2B4C32',  // Change this color to match your theme
        animation: 'spin 1s linear infinite'
    };

    const keyframes = ` @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                        }`;
  return (
   <div className="flex flex-col justify-center items-center min-h-screen">
            <style>
                {keyframes}
            </style>
            <div className="loader ease-linear rounded-full border-t-8 border-gray-200 h-16 w-16" style={spinnerStyle}></div>
            <p>Loading...Please Wait !</p>
        </div>
    );
}
