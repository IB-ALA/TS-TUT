"use strict";
// convert to more ot less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
// not used mostly 'cause we can't use it in tsx files (react)
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// be careful! TS sees no problem here but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string // not not
// Force casting ot Double casting
// not reccommended
10;
// The DOM
// const img = document.querySelector("img") as HTMLImageElement
const img = document.querySelector("img");
// const myImg = document.getElementById("myImg")! as HTMLImageElement
// just use one '!'- not null or 'as'-specification
const myImg = document.getElementById("myImg");
const nextImg = document.getElementById("myImg");
img.src;
myImg.src;
