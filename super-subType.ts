//Super type

type SuperType = {
  name: string;
};

//Sub type

type SubType = {
  name: string;
  sex: string;
  age: number;
};

const superPerson: SuperType = { name: "Victoria" };
const subPerson: SubType = { name: "Illia", sex: "male", age: 18 };
//Почему? Потому что subPerson содержит всё, что нужно SuperType (а именно name).
const person: SuperType = subPerson;

console.log(person);

// Простыми словами:
// SuperType — это общий шаблон (минимум).

// SubType — это расширенный вариант, который включает всё из SuperType, плюс добавляет своё.

// Это нужно, чтобы использовать общие функции и не дублировать типы.

type BaseEntity = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

type OurUser = BaseEntity & {
  name: string;
  age: number;
  email: string;
  sex: string;
};

const mainUser: OurUser = {
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "ALex",
  age: 65,
  email: "alex21@gmail.com",
  sex: "male",
};


console.log(mainUser);
