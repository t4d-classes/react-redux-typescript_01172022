import { Reducer, combineReducers, AnyAction } from 'redux';

import { Car, CarsSort, ORDER_ASC, ORDER_DESC } from '../models/cars';
import { CarToolState } from '../models/carToolStore';

import {
  isAppendCarAction,
  isReplaceCarAction,
  isRemoveCarAction,
  isSortCarsAction,
  isEditCarAction,
  isCancelCarAction,
} from '../actions/carToolActions';

export const carsSortReducer: Reducer<CarsSort, AnyAction> = (
  carsSort = { col: 'id', dir: ORDER_ASC },
  action,
) => {
  if (isSortCarsAction(action)) {
    if (action.payload.col === carsSort.col) {
      return {
        ...carsSort,
        dir: carsSort.dir === ORDER_ASC ? ORDER_DESC : ORDER_ASC,
      };
    } else {
      return {
        col: action.payload.col,
        dir: ORDER_ASC,
      };
    }
  }

  return carsSort;
};

export const editCarIdReducer: Reducer<number, AnyAction> = (
  editCarId = -1,
  action,
) => {
  if (isEditCarAction(action)) {
    return action.payload.carId;
  }

  if (
    isAppendCarAction(action) ||
    isReplaceCarAction(action) ||
    isRemoveCarAction(action) ||
    isCancelCarAction(action)
  ) {
    return -1;
  }

  return editCarId;
};

const initialCars: Car[] = [
  {
    id: 1,
    make: 'Ford',
    model: 'Fusion Hybrid',
    year: 2020,
    color: 'blue',
    price: 45000,
  },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

export const carsReducer: Reducer<Car[], AnyAction> = (
  cars = initialCars,
  action,
) => {
  if (isAppendCarAction(action)) {
    return [
      ...cars,
      {
        ...action.payload.car,
        id: Math.max(...cars.map((c) => c.id), 0) + 1,
      },
    ];
  }

  if (isReplaceCarAction(action)) {
    const { car } = action.payload;
    const carIndex = cars.findIndex((c) => c.id === car.id);
    const newCars = [...cars];
    newCars[carIndex] = car;
    return newCars;
  }

  if (isRemoveCarAction(action)) {
    return cars.filter((c) => c.id !== action.payload.carId);
  }

  return cars;
};

export const carToolReducer: Reducer<CarToolState, AnyAction> = combineReducers(
  {
    carsSort: carsSortReducer,
    editCarId: editCarIdReducer,
    cars: carsReducer,
  },
);
