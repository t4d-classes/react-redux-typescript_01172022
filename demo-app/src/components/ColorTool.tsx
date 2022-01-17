import { Color } from '../models/colors';

export type ColorToolProps = {
    colors: Color[],
};

export const ColorTool = (props: ColorToolProps) => {

    const colorListItems = props.colors.map(
        (c) => <li key={c.id}>{c.name}</li>)

    return (
        <>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {colorListItems}
            </ul>
        </>
    );
};