"use strict";
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
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["dave", 42, true];
let mixed = ["John", 1, true];
// mixed = myTuple;   // allowed
// myTuple = mixed    // not allowed
// myTuple[2] = 42    // not allowed
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "john";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1849, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    //   active: true, // works 'cause it is optional now
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
// evh.years = 44  // not allowed
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
let mike = {
    active: true,
    albums: ["I", "II", "IV"],
};
console.log(greetGuitarist(mike));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
