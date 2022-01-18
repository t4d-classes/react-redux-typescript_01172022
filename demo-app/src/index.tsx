import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool'
import { CarTool } from './components/CarTool'

import { Color } from './models/colors';
import { Car } from './models/cars';

import "./index.css";

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' }
];

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

render(

  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);