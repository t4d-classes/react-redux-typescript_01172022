import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool'
import { CarTool } from './components/CarTool'

import { Color } from './models/colors';

const colorList: Color[] = [
    { id: 1, name:'red' },
    { id: 2, name:'green' },
    { id: 3, name:'blue' }
];

render(
    
    <>
        {/* React.createElement(ColorTool, { colors: colorList }) */}
        <ColorTool colors={colorList} />
        <CarTool />
    </>,
    document.querySelector('#root'),
);