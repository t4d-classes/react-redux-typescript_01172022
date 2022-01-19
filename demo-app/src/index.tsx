import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { CalcTool } from './components/CalcTool';
import { calcToolStore } from './stores/calcToolStore';
// import { ColorTool } from './components/ColorTool'
// import { CarTool } from './components/CarTool'

// import { Color } from './models/colors';
// import { CarToolStoreProvider } from './contexts/carToolStoreContext';

import "./index.css";

// const colorList: Color[] = [
//   { id: 1, name: 'red', hexcode: 'ff0000' },
//   { id: 2, name: 'green', hexcode: '00ff00' },
//   { id: 3, name: 'blue', hexcode: '0000ff' }
// ];

render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    {/* <ColorTool colors={colorList} />
    <CarToolStoreProvider>
      <CarTool />
    </CarToolStoreProvider> */}
    <Provider store={calcToolStore}>
      <CalcTool />
    </Provider>
  </>,
  document.querySelector('#root'),
);