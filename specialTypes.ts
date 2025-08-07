// Special data - Types  in Type script
// any , unknown , never, void

//ANY turn offs all types DANGEROUS!!

//Mistake !!!
function ourData(data: any) {
  return data;
}

// `Unknown` type is a safe decision if you're not sure
// What kind of data you're going to work with.
// Usually, we would use it together with type guards like `if` / `else` / `typeof`.

function secret(data: unknown) {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "Our data is not a string";
  }
}
// console.log(secret("Hey from unknown-Type"));

//let ourValue: unknown = 11;
//let str: string = ourValue;
// нельзя присвоить unkown какому то другому типу

// VOID
// This type means that the function finishes but doesn't return any value

// Часто используется для callBack функции

function sayHello(): void {
  console.log("Hi"); // функция завершается, но не возвращает значение
}

// Если наша функция ничего не возращает она по default буде undefind
