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
    image: "/images/audi-rs3.jpg",
  },
  {
    name: "Ultra Car",
    type: "BMW M3",
    color: "blue",
    motor: {
      serial: 2345,
      hp: 473,
    },
    image: "/images/BMW_M3_CS_Touring_facelift.jpg",
  },
  {
    name: "Road King",
    type: "Mercedes AMG C63",
    color: "white",
    motor: {
      serial: 3456,
      hp: 503,
    },
    image: "/images/mercedes-benz-amg.jpg",
  },
  {
    name: "Beast Mode",
    type: "Dodge Charger SRT",
    color: "red",
    motor: {
      serial: 4567,
      hp: 717,
    },
    image: "/images/Dodge.jpg",
  },
  {
    name: "Green Arrow",
    type: "Ford Mustang GT",
    color: "green",
    motor: {
      serial: 5678,
      hp: 450,
    },
    image: "/images/ford-mustang.jpg",
  },
  {
    name: "Beatiful Car",
    type: "Bugatti Veyron",
    color: "black",
    motor: {
      serial: 23085,
      hp: 1001,
    },
    image: "/images/bugatti-veyron.jpg",
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
