import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { Color } from '../models/colors';
import { ColorToolState, ColorToolProps } from '../models/colorToolStore';
import { 
  createAppendColorAction } from '../actions/colorToolActions';

import { colorsSelector } from '../selectors/colorToolSelector';

export type UseColorTool = () => ColorToolProps;

export const useColorTool: UseColorTool = () => {

  const colors = useSelector<ColorToolState, Color[]>(colorsSelector);

  const boundActions = bindActionCreators({
    addColor: createAppendColorAction,
  }, useDispatch());

  return {
    colors,
    ...boundActions,
  };

};