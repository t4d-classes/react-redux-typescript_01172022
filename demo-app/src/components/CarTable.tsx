import { Car, CarsSort, CarKeys } from '../models/cars';
import { CarViewRow } from "./CarViewRow";

export type CarTableProps = {
  cars: Car[];
  carsSort: CarsSort;
  onDeleteCar: (carId: number) => void;
  onSortCars: (col: CarKeys) => void;
}

export const CarTable = ({
  cars, carsSort,
  onDeleteCar: deleteCar,
  onSortCars: sortCars,
 }: CarTableProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">
            <button type="button" onClick={() => sortCars('id')}>
              Id
              {carsSort.col === "id" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('make')}>
              Make
              {carsSort.col === "make" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('model')}>
              Model
              {carsSort.col === "model" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('year')}>
              Year
              {carsSort.col === "year" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('color')}>
              Color
              {carsSort.col === "color" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('price')}>
              Price
              {carsSort.col === "price" && "(" + carsSort.dir + ")"}
            </button>
          </th>
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