import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import { CalcTool } from './components/CalcTool';
// import { calcToolStore } from './stores/calcToolStore';

import { ColorTool } from './components/ColorTool';
import { colorToolStore } from './stores/colorToolStore';

import { CarTool } from './components/CarTool';
import { carToolStore } from './stores/carToolStore';


import "./index.css";

render(
  <>
    {/* <Provider store={calcToolStore}>
      <CalcTool />
    </Provider> */}
    {/* <Provider store={colorToolStore}>
      <ColorTool />
    </Provider> */}
    <Provider store={carToolStore}>
      <CarTool />
    </Provider>
  </>,
  document.querySelector('#root'),
);