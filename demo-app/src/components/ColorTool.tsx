import { Color } from '../models/colors';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';

export type ColorToolProps = {
    colors: Color[],
};

export const ColorTool = (props: ColorToolProps) => {

    return (
        <>
            <ToolHeader headerText='Color Tool' />
            <ColorList colors={props.colors} />
        </>
    );
};