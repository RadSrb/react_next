import React from 'react';
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
    name: "Speedster",
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
];

export default function Page({ }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Cars</h1>
      <CarList cars={cars}/>
    </div>
  );
}