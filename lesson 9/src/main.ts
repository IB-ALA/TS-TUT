// UTILITY TYPES

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Require and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to DB

  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 75; // not not

// recordAssignment(assignGraded); // not not - no 'verified' prop
recordAssignment({ ...assignGraded, verified: true });

// Record
const hexColorMap: Record<string, string> = {
  // keys will be string and values will be string
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

// we can use types too
type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const fianlGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

// we can don it with interfaces as well
interface Grades {
  assign1: number;
  assign2: number;
}

const gradeDate: Record<Students, Grades> = {
  // has to have all the props of Students and all the props of Grade
  Sara: { assign1: 65, assign2: 46 },
  Kelly: { assign1: 76, assign2: 93 },
};

// Pick and Omit
// THEY ARE APPLIED TO AND INTERFACE (Assignmrnt is an interface)

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Excude and Extarct
// WORK WITH STRING LATERAL UNION TYPES (LetterGrades is a type not interface)
type AdjustedGrade = Exclude<LetterGrades, "U">;

type HighGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Dave" | "Jogn" | null | undefined;
type NamesOnly = NonNullable<AdjustedGrade>;

// ReturnType
// type NewAssign = { title: string; points: number };

// const createNewAssign = (title: string, points: number): NewAssign => {
//   return { title, points };
// };
// the problem is, if change the function, we also have to change the type

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type NewAssign = ReturnType<typeof createNewAssign>;
// when you change the function, the type also changes
// very useful when you are working with functions you
//  didn't create liike from a library

const tsAssign: NewAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);

// Parameters
// also like the ReturnType but here we derive the type
// from the parameters
type AssignParams = Parameters<typeof createNewAssign>;
// now AssignParams is a tuple '[title: string, points: number]'
const assignArgs: AssignParams = ["Generics", 200];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited
// helps with the ReturnType of a promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
