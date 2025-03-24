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
    <img src={car.image} alt={car.name} className='car-image'/>
    <div>{car.type}</div>
    <div>{car.motor.serial}</div>
    <div>{car.motor.hp} hp</div>
    <div>{car.color}</div>
    {isActive ? "active" : "inactive"}
  </div>
  );
}