import { Car } from '../models/cars';
import { CarViewRow } from "./CarViewRow";

export type CarTableProps = {
  cars: Car[];
}

export const CarTable = (props: CarTableProps) => {

  return (
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
        {props.cars.map(c => <CarViewRow key={c.id} car={c} />)}
      </tbody>
    </table>

  )


};