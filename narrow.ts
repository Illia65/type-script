// Narrow = (звуження типів)
// Narrow в TypeScript — це коли ми уточнюємо тип змінної, щоб TS знав точно, що це за тип у конкретному місці коду.

// function showInfoAboutUser(id: string | number) {
//   console.log(id.toUpperCase()); // We will have error
// }
//Тут id — це union string | number, і TS не знає, який саме тип прийде у runtime.

function showInfoAboutUsers(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

//Перевірка typeof
// typeof value === "string" // narrowing до string

//Перевірка instanceof
//value instanceof Date // narrowing до Date

//Перевірка через 'in'
//if ("id" in obj) { /* obj має властивість id */ }

//Літеральні порівняння
//if (status === "success") { /* narrowing до конкретного string literal */ }
