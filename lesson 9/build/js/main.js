"use strict";
// UTILITY TYPES
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Require and Readonly
const recordAssignment = (assign) => {
    // send to DB
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 75; // not not
// recordAssignment(assignGraded); // not not - no 'verified' prop
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    // keys will be string and values will be string
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const fianlGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeDate = {
    // has to have all the props of Students and all the props of Grade
    Sara: { assign1: 65, assign2: 46 },
    Kelly: { assign1: 76, assign2: 93 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
// ReturnType
// type NewAssign = { title: string; points: number };
// const createNewAssign = (title: string, points: number): NewAssign => {
//   return { title, points };
// };
// the problem is, if change the function, we also have to change the type
const createNewAssign = (title, points) => {
    return { title, points };
};
// when you change the function, the type also changes
// very useful when you are working with functions you
//  didn't create liike from a library
const tsAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);
// now AssignParams is a tuple '[title: string, points: number]'
const assignArgs = ["Generics", 200];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
