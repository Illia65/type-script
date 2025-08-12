// Literal can be string or number

// Одна змінна може приймати конкретні значення
// Це потрібно щоб захистити себе від помилок + щоб код був зрозумілий!

//Змінна може бути тільки одним із варіантів

type UserRole = "user" | "guest" | "admin";

function checkTheRole(role: UserRole) {
  if (role === "admin") {
    // "You can log in"
  }
}

type Theme = "black" | "ligth";

function choseThemeBg(color: Theme) {
  if (color === "black") {
    // Our bg is black at the moment
  } else {
    // Our bg is light
  }
}

type ResponseStatus = "ok" | "fail" | "timeout";

function getResponce(res: ResponseStatus) {
  if (res === "ok") {
    return "We have got responce from server";
  }
  if (res === "fail") {
    return "Our responce has been canseld";
  }
}

type Status = "success" | "error";

function handle(status: Status) {}

handle("success");
// handle("ok"); // error

//📦 У житті це як...
//Уяви, ти даєш людині вибір: чай, кава або сік.
type Drink = "tea" | "coffee" | "juice";
//І вона не зможе замовити "борщ" 😄 — бо такого варіанту нема.

const value = {
  clor: "green",
} as const;

//  as const  =  readonly
// Только для чтения (Изменять нельзя)

interface Config {
  readonly apiUrl: string;
}

//Когда использовать readonly
//ID, ключи, или любые уникальные значения, которые не должны меняться

type EventName = "click" | "change";

type EventHandler = `on${EventName}`;

function addEvennHadler(e: EventHandler) {
  console.log(`Added handler: ${e}`);
}

addEvennHadler("onclick");
addEvennHadler("onchange");
// addEvennHadler("onsubmit");
