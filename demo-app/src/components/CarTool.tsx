
export const CarTool = () => {

    const cars = [
        { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
        { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
    ];
    const carRows = cars.map(c => <tr key={c.id}>
        <td>{c.id}</td>
        <td>{c.make}</td>
        <td>{c.model}</td>
        <td>{c.year}</td>
        <td>{c.color}</td>
        <td>{c.price}</td>
    </tr>)

    return (
        <>
            <header>
                <h1>Car Tool</h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Make</th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Color</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {carRows}
                </tbody>
            </table>
        </>
    );
};