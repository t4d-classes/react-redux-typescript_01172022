import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import { CalcToolState, CalcToolProps } from '../models/calcToolStore';
import { 
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteHistoryEntryAction,
  createNoOpAction, createErrorMessageAction } from '../actions/calcToolActions';
import { HistoryEntry } from '../models/history';

const resultSelector1 = (state: CalcToolState) => {
    
  const newResult = state.history.reduce((r, entry) => {
    switch (entry.opName) {
      case 'ADD':
        return r + entry.opValue;
      case 'SUBTRACT':
        return r - entry.opValue;
      case 'MULTIPLY':
        return r * entry.opValue;
      case 'DIVIDE':
        return r / entry.opValue;
      default:
        return r;
    };
  }, 0);

  console.log("recalculate results 1, ", newResult);

  return newResult;
}

const resultSelector2 = createSelector( 
  (state: CalcToolState) => state.history,
  history => {

    const newResult = history.reduce((r, entry) => {
      switch (entry.opName) {
        case 'ADD':
          return r + entry.opValue;
        case 'SUBTRACT':
          return r - entry.opValue;
        case 'MULTIPLY':
          return r * entry.opValue;
        case 'DIVIDE':
          return r / entry.opValue;
        default:
          return r;
      }
    }, 0);
    
    console.log("recalculate results 2, ", newResult);

    return newResult;
    
  });

export type UseCalcTool = () => CalcToolProps;

export const useCalcTool: UseCalcTool = () => {

  console.log("useCalcTool")

  const result = useSelector<CalcToolState, number>(resultSelector2);

  const history = useSelector<CalcToolState, HistoryEntry[]>(state => state.history);

  const errorMessage = useSelector<CalcToolState, string>(state => state.errorMessage);

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction,
    noOp: createNoOpAction,
    setErrorMessage: createErrorMessageAction,
  }, useDispatch());

  return {
    result,
    history,
    errorMessage,
    ...boundActions,
  };

};