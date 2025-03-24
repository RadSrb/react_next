"use client";
import React, { useEffect, useState } from 'react';
import CarList from '../components/cars/CarList';
import { Car } from '@/lib/types/types';

type Props = {};

const cars: Car[] = [
  {
    name: "Super Car",
    type: "Audi RS3",
    color: "black",
    motor: {
      serial: 1234,
      hp: 300,
    },
  },
  {
    name: "Ultra Car",
    type: "BMW M3",
    color: "blue",
    motor: {
      serial: 2345,
      hp: 473,
    },
  },
  {
    name: "Road King",
    type: "Mercedes AMG C63",
    color: "white",
    motor: {
      serial: 3456,
      hp: 503,
    },
  },
  {
    name: "Beast Mode",
    type: "Dodge Charger SRT",
    color: "red",
    motor: {
      serial: 4567,
      hp: 717,
    },
  },
  {
    name: "Green Arrow",
    type: "Ford Mustang GT",
    color: "green",
    motor: {
      serial: 5678,
      hp: 450,
    },
  },
  {
    name: "Green Arrow",
    type: "Ford Mustang GT",
    color: "green",
    motor: {
      serial: 5678,
      hp: 450,
    },
  }
];

export default function Page({ }: Props) {
  const [showTop3, setShowTop3] = useState(false);

  useEffect(() => {
  }, [showTop3]);

  const displayedCars = showTop3 ? cars.slice(0, 3) : cars;



  return (
    <div className='p-4'>
      <button
        className='bg-amber-300 p-2 rounded mb-4'
        onClick={() => setShowTop3(!showTop3)}
      >
        {showTop3 ? "Show All Cars" : "Show Top 3 Cars"}
      </button>

      <CarList cars={displayedCars} />
    </div>
  );
}
