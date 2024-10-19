// type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber // doesnt word
// interfaces like objects and classed
// type for any other types

// Literal types
let myName: "Dave";
// myName = 'John'  // not allowed

let userName: "Dave" | "John" | "Amy";
// console.log(userName); // error

userName = "Amy";
// userName = "mike"; // not not

// DRY - DONT REPEAT YOURSELF

// Functions
const add = (a: number, b: number): number => a + b;

const logMsg = (message: any): void => console.log(message);

logMsg("hello");
logMsg(add(2, 3));
// logMsg(add("s", 3)); // not not

let subract = function (c: number, d: number): number {
  return c - d;
};

// type alias - better place to use tpye instead of interface
// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default params
// default values will not work for aliases, whether type or interface
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3)); // for a..

// rest params
const total = (a: number, ...numbs: number[]): number =>
  a + numbs.reduce((prev, curr) => prev + curr);

logMsg(total(10, 2, 3, 4)); // tho not an array inserted directly

// never
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};
