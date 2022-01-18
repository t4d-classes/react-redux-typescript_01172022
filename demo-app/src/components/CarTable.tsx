import { Car } from '../models/cars';
import { CarViewRow } from "./CarViewRow";

export type CarTableProps = {
  cars: Car[];
  onDeleteCar: (carId: number) => void;
  onSortCars: (col: string) => void;
}

export const CarTable = ({
  cars,
  onDeleteCar: deleteCar,
  onSortCars: sortCars,
 }: CarTableProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th scope="col" onClick={() => sortCars('id')}>Id</th>
          <th scope="col" onClick={() => sortCars('make')}>Make</th>
          <th scope="col" onClick={() => sortCars('model')}>Model</th>
          <th scope="col" onClick={() => sortCars('year')}>Year</th>
          <th scope="col" onClick={() => sortCars('color')}>Color</th>
          <th scope="col" onClick={() => sortCars('price')}>Price</th>
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