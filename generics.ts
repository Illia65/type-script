//Generics =  обобщение

//<T> — объявление параметра типа.
//(value: T) Параметр функции value имеет тип T.

//Это значит: любой конкретный тип, который подставят вместо T, обязан удовлетворять этому параметру. Если T = string, то value должен быть string.

//: T (после ) и до {). Это тип возвращаемого значения функции. Здесь возвращаемый тип тот же самый T.

function identity<T>(value: T): T {
  return value;
}

identity<string>("Hi");
identity<number>(42);

function getFromBOx<T>(box: T): T {
  return box as T;
}

//Тут void говорит: "Функция не должна возвращать значение".

function getUser<T>(user: T): T {
  return user;
}

getUser({ name: "Bob", age: 14 });

interface User {
  name: string;
  age: number;
}

interface Tree<T> {
  id: string;
  name: string;
  children: Tree<T>[] | null;
  value: T; // наше value универсальное
}

const treeNode: Tree<User | number> = {
  id: "10",
  name: "",
  children: null,
  value: 12,
};

function wrapInArr<T>(arr: T): T[] {
  return [arr];
}
const text = wrapInArr("Hey");
const number = wrapInArr(1);
const obj = wrapInArr({ id: 1 });

function getFirstElement<T>(el: T[]): T | undefined {
  return el[1];
}
const getResult = getFirstElement([1, 2, 4]);


interface MainResponce<T>  {

}