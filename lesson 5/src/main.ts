type One = string;
type Two = string | number;
type Three = "hello";

// convert to more ot less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

// not used mostly 'cause we can't use it in tsx files (react)
let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;

  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// be careful! TS sees no problem here but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string // not not

// Force casting ot Double casting
// not reccommended
10 as unknown as string;

// The DOM
// const img = document.querySelector("img") as HTMLImageElement
const img = document.querySelector("img")!;
// const myImg = document.getElementById("myImg")! as HTMLImageElement

// just use one '!'- not null or 'as'-specification
const myImg = document.getElementById("myImg") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("myImg");

img.src;
myImg.src;
