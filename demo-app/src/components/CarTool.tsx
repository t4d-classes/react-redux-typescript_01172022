import { useState } from 'react';

import { Car, NewCar, CarsSort, CarKeys, ORDER_ASC, ORDER_DESC } from '../models/cars';
import { useCarList } from '../hooks/useCarList';

import { useCarToolStore } from '../hooks/useCarToolStore';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[];
}

export const CarTool = (props: CarToolProps) => {

  const {
    cars,
    editCarId,
    carsSort,
    addCar,
    saveCar,
    deleteCar,
    editCar,
    cancelCar,
    sortCars,    
  } = useCarToolStore([ ...props.cars ]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        carsSort={carsSort} onEditCar={editCar} onDeleteCar={deleteCar}
        onSortCars={sortCars} onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};