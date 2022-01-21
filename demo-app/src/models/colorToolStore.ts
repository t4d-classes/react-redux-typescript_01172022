import { Color, NewColor } from './colors';

export type ColorToolState = {
  colors: Color[];
};

export type ColorToolProps = {
  colors: Color[];
  addColor: (color: NewColor) => void;
};
