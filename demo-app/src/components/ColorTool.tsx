
export const ColorTool = () => {

    const colors = ['red', 'green', 'blue'];
    const colorListItems = colors.map(c => <li>{c}</li>)

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