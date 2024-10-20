"use strict";
// original JS code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// 1
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }
// 2
const year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
// 3 - works too
// const year = document.getElementById("year")!;
// const year = document.getElementById("year") as HTMLElement
// const thisYear = new Date().getFullYear() as unknown as string
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
