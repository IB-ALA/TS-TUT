let stringArr = ["one", "hey", "Dave"];
let guitars = ["Start", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];

stringArr[1] = "John";
// stringArr.push(42)  //not allowed
stringArr.push("hey");

guitars[0] = 1994;
guitars.unshift("Jim");

// reassigning
guitars = stringArr;
mixedData = guitars;
// guitars = mixedData  // not allowed

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["dave", 42, true];
let mixed = ["John", 1, true];

// mixed = myTuple;   // allowed
// myTuple = mixed    // not allowed
// myTuple[2] = 42    // not allowed
myTuple[1] = 42;

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};
exampleObj.prop1 = "john";

// Can use 'type' or 'interface'
// You can use interface for something like a class that has methods
// Type for normal objects. (no restrictions though)

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

// interface Guitarist {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// }

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1849, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  //   active: true, // works 'cause it is optional now
  active: true,
  albums: ["I", "II", "IV"],
};

evh = jp;
// evh.years = 44  // not allowed

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp));
let mike: Guitarist = {
  active: true,
  albums: ["I", "II", "IV"],
};
console.log(greetGuitarist(mike));

// Enums

enum Grade {
  U = 1, // numbers defaultly start from 0 but you can specify it and all will follow suite
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
