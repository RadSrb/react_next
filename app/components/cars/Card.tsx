"use client";
import { Car } from '@/lib/types/types';
import React from 'react'

type Props = {car: Car }

export default function Card({car}: Props) {
const [isActive, setIsActive] = React.useState(false);

  return (
  <div className={`shadow p-4 hover:cursor-pointer
    ${isActive ? 'bg-amber-200' : 'bg-gray-200'}`}
  onClick={() => 
    setIsActive(!isActive)
  }
  >

    <h2 className='font-bold text-3xl'>{car.name}</h2>
    <div>{car.color}</div>
    {isActive ? "active" : "inactive"}
  </div>
  );
}