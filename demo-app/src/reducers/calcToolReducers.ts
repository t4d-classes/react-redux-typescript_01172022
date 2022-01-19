import { Reducer, AnyAction, combineReducers } from 'redux';

import {
  isAddAction, isSubtractAction
} from '../actions/calcToolActions';
import { CalcToolState } from '../models/calcToolStore';


export const resultReducer: Reducer<number, AnyAction> = (
  result = 0, action) => {
  
    if (isAddAction(action)) {
      return result + action.payload.num;
    }

    if (isSubtractAction(action)) {
      return result - action.payload.num;
    }

    return result;

  };

  export const calcToolReducer: Reducer<
    CalcToolState, AnyAction
  > = combineReducers({
    result: resultReducer
  });