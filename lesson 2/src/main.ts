let myName: string = "Dave";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "John";
meaningOfLife = 22;
isLoading = false;

album = true;
album = "true";
album = 3;

const sum = (a: number, b: number) => a + b;

let postId: string | number; // union type: can be more than two data types
let isActive: number | boolean;

let re: RegExp = /\w+/g;
