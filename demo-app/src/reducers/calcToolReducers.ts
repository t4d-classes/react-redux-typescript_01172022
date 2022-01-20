import { Reducer, AnyAction, combineReducers } from 'redux';

import {
  isAddAction, isSubtractAction, isMultiplyAction, isDivideAction, isMathAction
} from '../actions/calcToolActions';
import { CalcToolState } from '../models/calcToolStore';
import { HistoryEntry } from '../models/history';


export const resultReducer: Reducer<number, AnyAction> = (
  result = 0, action) => {
  
    if (isAddAction(action)) {
      return result + action.payload.num;
    }

    if (isSubtractAction(action)) {
      return result - action.payload.num;
    }

    if (isMultiplyAction(action)) {
      return result * action.payload.num;
    }

    if (isDivideAction(action)) {
      return result / action.payload.num;
    }

    return result;

  };

  export const historyReducer: Reducer<HistoryEntry[], AnyAction> = (
    history = [], action) => {

      if (isMathAction(action)) {

          return [
            ...history,
            {
              id: Math.max(...history.map(e => e.id), 0) + 1,
              opName: action.type,
              opValue: action.payload.num
            }
          ];
      }
  
      return history;
    };

  export const calcToolReducer: Reducer<
    CalcToolState, AnyAction
  > = combineReducers({
    result: resultReducer,
    history: historyReducer
  });

//  export const calcToolReducer = function(state:CalcToolState, action: AnyAction) {

//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
//  }