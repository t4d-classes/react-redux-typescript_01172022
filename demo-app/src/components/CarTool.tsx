
import { Car } from '../models/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export type CarToolProps = {
    cars: Car[];
}

export const CarTool = (props: CarToolProps) => {

    const carRows = props.cars.map(c => <tr key={c.id}>
        <td>{c.id}</td>
        <td>{c.make}</td>
        <td>{c.model}</td>
        <td>{c.year}</td>
        <td>{c.color}</td>
        <td>{c.price}</td>
    </tr>)

    return (
        <>
           <ToolHeader headerText="Car Tool" />
           <CarTable cars={props.cars} /> 
        </>
    );
};