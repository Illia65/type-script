// primitive datatypes
// string, number, bigint, boolean, symbol, undefined,  null

//special dataTypes(Type script)
//any, unknow, never, void + Literals

//unionType

let data: string | number; //this variable can be string or number
data = "Data string";
data = 5; // Data number

type mainIfo = {
  name: string;
  lastName: string;
};
type additionalInfo = {
  age: number;
};

type fullInfo = mainIfo | additionalInfo; 

// Here we can take all values

let info0: mainIfo = {
  name: "Ivan",
  lastName: "Udin",
};

let info1: additionalInfo = {
  age: 36,
};

let info2: fullInfo = {
  name: "David",
  lastName: "Ovcharuk",
  age: 18,
};
console.log(info2);

// intresection - Пересичене. // обєднує всі значення !
//  number &  string  никогда не может быть !!!

type NewPhone = {
  id: number;
  model: string;
};

type WasMade = {
  createdAt: Date;
  updatedAt: Date;
};

type generalInfoAboutPhone = NewPhone & WasMade;

const phone: generalInfoAboutPhone = {
  id: 1,
  model: "Iphone 15",
  createdAt: new Date(),
  updatedAt: new Date(),
};
