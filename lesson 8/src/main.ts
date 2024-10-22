// const stringEcho = (arg: string): string => arg;

// GENERICS
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

// very usefull when your function has to do some thinking or
// logic about what it needs to return

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// Limiting the generic type
interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process user
  return user;
};

console.log(processUser({ id: 1, name: "dave" }));
// console.log(processUser({ name: "dave" })); // not not

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
  // we pass the 'key' directly innto  the user[key] because
  // we are alreading extending K as the keyof T
};

const usersArray = [
  { id: 1, name: "IB", address: { country: "GH", city: "Accra" } },
  { id: 1, name: "Dave", address: { country: "NG", city: "Abuja" } },
  { id: 1, name: "Mike", address: { country: "USA", city: "Atalanta" } },
];

console.log(getUsersProperty(usersArray, "name"));
console.log(getUsersProperty(usersArray, "address"));

class StateObj<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObj<string>("John");
// const store = new StateObj("John"); // works too
console.log(store.state);
store.state = "Dave";
// store.state = 12  // not not

const myState = new StateObj<(string | number | boolean)[]>([15]);
// myState.state = ["mike", 54, true];
console.log(myState.state);
