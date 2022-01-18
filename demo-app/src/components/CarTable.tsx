import { Car } from '../models/cars';
import { CarViewRow } from "./CarViewRow";

export type CarTableProps = {
  cars: Car[];
  onDeleteCar: (carId: number) => void;
}

export const CarTable = ({ cars, onDeleteCar: deleteCar }: CarTableProps) => {

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
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(c =>
          <CarViewRow key={c.id} car={c} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>

  )


};