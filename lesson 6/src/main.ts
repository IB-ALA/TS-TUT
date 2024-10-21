class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  secondLang!: string; // an assertion (!).. not recommended for brginners though

  constructor(
    // visibility modifiers/members
    // data modifiers
    // access modifiers
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript" // default values
  ) {
    // Assignments in the body of the constructor are not required here.
    // It is not an error if you leave them there, but they are not
    // required, although they are required if you assign the variables
    // before the constructor
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age);   // not not
// console.log(Dave.lang); // not not

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.age)  // not not
// console.log(Sara.lang) // not not

/////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

////////////////////////////////

class Peeps {
  // static applies directly to the class and not to any instantiated object of the class
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; // first id is 1
    // this.id = Peeps.count++; // first id is 0
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);

console.log(Peeps.getCount());
console.log(Peeps.count);

////////////////////////

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((element) => typeof element === "string")
    ) {
      this.dataState = value;
      return; // setters cannot return a value
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = ["Van Halen", 5150];  // not not
