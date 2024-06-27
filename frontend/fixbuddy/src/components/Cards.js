import React from 'react'

const shadow={
  boxShadow: '0px 0px 4px 0px rgba(7, 7, 7, 0.10), 0px 0px 8px 0px rgba(4, 46, 41, 0.14)',
}

export default function Cards(props) {
  return (
    <div className='flex flex-col justify-center w-[15rem] h-[18rem] mt-4 mx-4 pb-4 hover:opacity-80 hover:cursor-pointer'>
      <img src={props.src} alt={props.alt} className='w-full h-[70%]'style={shadow}/>
      <div className='bg-[#ecf0ee] w-full p-4 rounded-b-xl m-0' style={shadow}>
       <h2 className='text-center font-sans font-medium text-[16px] '>{props.title}</h2>
       <p className='text-center font-sans text-[14px] '>{props.description}</p>
      </div>
    </div>
  );
}
