"use client";
import React, { useEffect, useState } from 'react';
import CarList from '../components/cars/CarList';
import { Car } from '@/lib/types/types';

type Props = {};

const cars: Car[] = [
  {
    name: "Super Car",
    type: "Audi RS3",
    color: "white",
    motor: {
      serial: 1234,
      hp: 300,
    },
    image: "/images/audi-rs3.jpg",
    price: 60000,
  },
  {
    name: "Ultra Car",
    type: "BMW M3",
    color: "grey",
    motor: {
      serial: 2345,
      hp: 473,
    },
    image: "/images/BMW_M3_CS_Touring_facelift.jpg",
    price: 80000,
  },
  {
    name: "Road King",
    type: "Mercedes AMG C63",
    color: "black",
    motor: {
      serial: 3456,
      hp: 503,
    },
    image: "/images/mercedes-benz-amg.jpg",
    price: 90000, 
  },
  {
    name: "Beast Mode",
    type: "Dodge Charger SRT",
    color: "grey",
    motor: {
      serial: 4567,
      hp: 717,
    },
    image: "/images/Dodge.jpg",
    price: 100000,
  },
  {
    name: "Green Arrow",
    type: "Ford Mustang GT",
    color: "grey",
    motor: {
      serial: 5678,
      hp: 450,
    },
    image: "/images/ford-mustang.jpg",
    price: 70000, 
  },
  {
    name: "Beautiful Car",
    type: "Bugatti Veyron",
    color: "grey",
    motor: {
      serial: 23085,
      hp: 1001,
    },
    image: "/images/bugatti-veyron.jpg",
    price: 2000000,
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
        className='mt-30 bg-amber-300 p-2 rounded mb-4'
        onClick={() => setShowTop3(!showTop3)}
      >
        {showTop3 ? "Show All Cars" : "Show Top 3 Cars"}
      </button>

      <CarList cars={displayedCars} />
    </div>
  );
}
