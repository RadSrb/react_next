"use client";
import { Car } from '@/lib/types/types';
import React from 'react'

type Props = {car: Car }

export default function Card({car}: Props) {
const [isActive, setIsActive] = React.useState(false);

  return (
  <div className={`shadow p-6 m-4 rounded-2xl hover:cursor-pointer
      ${isActive ? 'bg-amber-200' : 'bg-gray-200'}`}
  onClick={() => 
    setIsActive(!isActive)
  }
  >

    <h2 className='font-bold text-3xl'>{car.name}</h2>
    <img src={car.image} alt={car.name} className='w-full h-48 object-cover rounded-lg'/>
<div className="flex flex-wrap justify-between mt-4">
<div>
    <div>{car.type}</div>
    <div>{car.motor.serial}</div>
    <div>{car.motor.hp} hp</div>
    <div>{car.color}</div>
    </div>
    <div className='mt-10  font-bold text-xl'>€ {car.price}</div>
</div>
    {isActive ? "active" : "inactive"}
    
  </div>
  );
}