import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { CalcToolState } from '../models/calcToolStore';
import { createAddAction, createSubtractAction } from '../actions/calcToolActions';

export const useCalcToolStore = () => {

  const result = useSelector<CalcToolState, number>(state => state.result);

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction
  }, useDispatch());

  return {
    result,
    ...boundActions,
  };

};