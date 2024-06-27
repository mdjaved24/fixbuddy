import React from 'react'

export default function IconsCard(props) {
    return (
      <div className='flex flex-col justify-center items-center content-center'>
        <img className='w-16 h-16 hover:cursor-pointer hover:opacity-60' src={props.src} alt={props.alt} />
        <h2 className='hover:cursor-pointer hover:opacity-60 text-center font-sans font-[450] text-lg w-16'>{props.title}</h2>
      </div>
  );
}
