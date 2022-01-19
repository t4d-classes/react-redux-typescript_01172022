import { Car, NewCar, CarsSort, CarKeys } from './cars';

export type CarToolState = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
};

export type CarToolActions = {
  addCar: (car: NewCar) => void;
  saveCar: (car: Car) => void;
  deleteCar: (carId: number) => void;
  editCar: (carId: number) => void;
  cancelCar: () => void;
  sortCars: (col: CarKeys) => void;
};

export type CarToolStore = CarToolState & CarToolActions;