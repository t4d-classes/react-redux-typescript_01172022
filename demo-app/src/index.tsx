import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool'
import { CarTool } from './components/CarTool'



render(
    // React.createElement(ColorTool)
    <>
        <ColorTool />
        <CarTool />
    </>,
    document.querySelector('#root'),
);