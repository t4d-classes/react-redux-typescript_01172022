import { useState } from 'react';

import { Car, NewCar, CarsSort, CarKeys, ORDER_ASC, ORDER_DESC } from '../models/cars';
import { useCarList } from '../hooks/useCarList';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[];
}

export const CarTool = (props: CarToolProps) => {

  const [ cars, appendCar, replaceCar, removeCar ] = useCarList([ ...props.cars ]);
  const [ carsSort, setCarsSort ] = useState<CarsSort>({
    col: 'id',
    dir: ORDER_ASC,
  });
  const [editCarId, setEditCarId ] = useState(-1);

  const addCar = (car: NewCar) => {
    appendCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    setEditCarId(-1);
  }

  const sortCars = (col: CarKeys) => {

    setCarsSort({
      // short hand property
      // col: col,
      col,
      dir:
        col !== carsSort.col
          ? ORDER_ASC
          : carsSort.dir === ORDER_DESC
            ? ORDER_ASC
            : ORDER_DESC
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

  const saveCar = (car: Car) => {
    replaceCar(car);
    setEditCarId(-1);
  }

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={orderCars(cars, carsSort)} editCarId={editCarId}
        carsSort={carsSort} onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSortCars={sortCars} onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};