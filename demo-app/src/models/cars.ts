

export type Car = {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    [ x: string ]: any;
};

export type NewCar = Omit<Car, 'id'>;

export type CarsSort = {
  col: string;
  dir: string;
};