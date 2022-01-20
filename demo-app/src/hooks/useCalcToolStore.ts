import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { CalcToolState, CalcToolStore } from '../models/calcToolStore';
import { 
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteHistoryEntryAction } from '../actions/calcToolActions';
import { HistoryEntry } from '../models/history';

export type UseCalcToolStore = () => CalcToolStore;

export const useCalcToolStore: UseCalcToolStore = () => {

  const result = useSelector<CalcToolState, number>(state => state.result);
  const history = useSelector<CalcToolState, HistoryEntry[]>(state => state.history);

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction,
  }, useDispatch());

  return {
    result,
    history,
    ...boundActions,
  };

};