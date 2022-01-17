import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool'



render(
    // React.createElement(ColorTool)
    <ColorTool />,
    document.querySelector('#root'),
);