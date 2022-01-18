import { useState } from 'react';

import { Car, NewCar, CarsSort } from '../models/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[];
}

export const CarTool = (props: CarToolProps) => {

  const [ cars, setCars ] = useState([ ...props.cars ]);
  const [ carsSort, setCarsSort ] = useState<CarsSort>({
    col: 'id',
    dir: 'asc',
  });

  const addCar = (car: NewCar) => {
    // setCars([
    //   ...cars,
    //   {
    //     ...car,
    //     id: Math.max(...cars.map(c => c.id), 0) + 1,
    //   },
    // ]);
  };

  const deleteCar = (carId: number) => {

    // const carIndex = cars.findIndex(c => c.id === carId);
    // cars.splice(carIndex, 1);
    // setCars(cars);
    // console.log(cars);

    setCars(cars.filter(c => c.id !== carId));
    console.log(cars);
  }

  const sortCars = (col: string) => {

    setCarsSort({
      // short hand property
      // col: col,
      col,
      dir:
        col !== carsSort.col
          ? 'asc'
          : carsSort.dir === 'desc'
            ? 'asc'
            : 'desc'
    });

  };

  const orderCars = (pCars: Car[], pCarsSort: CarsSort) => {

    return [ ...pCars ].sort( (a: Car, b: Car) => {

      const left = String(a[pCarsSort.col]).toUpperCase();
      const right = String(b[pCarsSort.col]).toUpperCase();

      if (left < right) {
        return carsSort.dir === 'asc' ? -1 : 1;
      } else if (left > right) {
        return carsSort.dir === 'desc' ? -1 : 1;
      } else {
        return 0;
      }

    });

  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={orderCars(cars, carsSort)} onDeleteCar={deleteCar} onSortCars={sortCars} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};