import React from 'react'
import StarRating from './StarRating'

export default function Reviews(props) {
  return (
    <div className='w-96 p-6'>
      <div className='flex flex-row items-center justify-between m-2'>
        <h2 className='font-bold font-sans text-[1.2rem]'>{props.name}</h2>
        <StarRating rating={props.rating}/>
      </div>
      <p className='font-sans mb-2 text-[1.1rem]'>{props.review}</p>
      <h2 className='font-sans font-medium text-[#2B4C32] text-[1.2rem]'>Service: {props.service}</h2>
    </div>
  );
}
