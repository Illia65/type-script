//How to type an object in TypeScript

//We can use object or interface

//  Что бы сделать поля не обязательными (просто ? )   name?: string;

type Address = {
  city: string;
  street: string;
  coords: number[];
};

interface Student {
  name: string;
  age: number;
  finalScore: number | string;
  address: Address;
}

const infoAboutStudent: Student = {
  name: "Illia",
  age: 16,
  finalScore: 9,
  address: {
    city: "Odesa",
    street: "Makarova",
    coords: [1234545544],
  },
};

//Типизация запросов
type ApiResponce<T> = {
  status: "success" | "error";
  data?: unknown; // потому как не знаем какая дата нам придет с бека!
};

type ComponetProps = {
  className: string;
  value: string;
  fn: () => void; // Это будет какйто то callBack
};

type OnClick = (e: MouseEvent) => void;
// const handleClick: OnClick = (e) => {
//   console.log(e.clientX, e.clientY);
// };
