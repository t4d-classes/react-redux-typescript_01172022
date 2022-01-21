import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { Car, CarsSort } from '../models/cars';
import { CarToolState, CarToolProps } from '../models/carToolStore';
import { 
  createAppendCarAction, createReplaceCarAction,
  createRemoveCarAction, createEditCarAction,
  createCancelCarAction, createSortCarsAction,
} from '../actions/carToolActions';
import {
  carsSelector, editCarIdSelector, carsSortSelector
} from '../selectors/carToolSelectors';

export type UseCarTool = () => CarToolProps;

export const useCarTool: UseCarTool = () => {

  const cars = useSelector<CarToolState, Car[]>(carsSelector);
  const editCarId = useSelector<CarToolState, number>(editCarIdSelector);
  const carsSort = useSelector<CarToolState, CarsSort>(carsSortSelector);

  const boundActions = bindActionCreators({
    addCar: createAppendCarAction,
    saveCar: createReplaceCarAction,
    deleteCar: createRemoveCarAction,
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    sortCars: createSortCarsAction,
  }, useDispatch());

  return {
    cars,
    editCarId,
    carsSort,
    ...boundActions,
  };

};