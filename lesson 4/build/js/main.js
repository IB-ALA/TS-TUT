"use strict";
// interface PostId = stringOrNumber // doesnt word
// interfaces like objects and classed
// type for any other types
// Literal types
let myName;
// myName = 'John'  // not allowed
let userName;
// console.log(userName); // error
userName = "Amy";
// userName = "mike"; // not not
// DRY - DONT REPEAT YOURSELF
// Functions
const add = (a, b) => a + b;
const logMsg = (message) => console.log(message);
logMsg("hello");
logMsg(add(2, 3));
// logMsg(add("s", 3)); // not not
let subract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default params
// default values will not work for aliases, whether type or interface
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3)); // for a..
// rest params
const total = (a, ...numbs) => a + numbs.reduce((prev, curr) => prev + curr);
logMsg(total(10, 2, 3, 4)); // tho not an array inserted directly
// never
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
