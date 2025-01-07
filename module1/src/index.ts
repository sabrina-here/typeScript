//1.initially run command "tsc --init " to initialize tsconfig.json
//2. then go to tsconfig and uncomment outDir and specify the path of file you want your compiled js files to be saved to .
//3. then run 'tsc' and the compiled js files will be in the specified path
//4. to avoid all this mess of compiling to js and then running the js to view output. install ts-node-dev package . its an npm package . read documentation to find how to use it. we installed it globally for this program.
//5. just for your ease. we ran this command "npm i -g ts-node-dev". then ran "ts-node-dev --respawn --transpile-only module1/src/index.ts".
//6. notice the mentioning of the file path on the second command.

let course = "next level web dev";
console.log(course);
let first: string = "sabrina";
// number
let roll: number = 123;
// boolean
let isAdmin: boolean = true;
// undefined
let x: undefined = undefined;
// null
let y: null = null;

let d;

d = 123;
d = "ddd";
d = true;
// d is of any type

// non primitive data types

let friends: string[] = ["rachel", "monica"];
let rollList: number[] = [1, 2];

// tuple --> array --> order --> type of values

let coordinates: [number, number] = [1, 5];

let ageName: [number, string] = [50, "sab"];

// reference type --> object

const user: {
  firstName: string;
  lastName: string;
  middleName?: string; // ? means optional
  isMarried: boolean;
  company: "sabrina organization"; // literal types. fixed value
  readonly age: number; //wont be able to change after initial declaration
} = {
  firstName: "sabrina",
  lastName: "khan",
  isMarried: true,
  company: "sabrina organization",
  age: 25,
};

// functions

//normal func
function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

//object --> function --> method

const poorUser = {
  name: "paro",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map((elem: number): number => elem * elem);

//spread operator
//destructuring
//rest operator

//spread operator

const bors1: string[] = ["sab", "dab", "pap"];
const bros2: string[] = ["tanmoy", "nahid", "rahat"];

bors1.push(...bros2);

const mentors = {
  tsc: "mezba",
  redux: "mir",
  dbms: "mizan",
};

const mentors2 = {
  prisma: "firoz",
  next: "tanmoy",
  cloud: "nahid",
};

const mentorList = {
  ...mentors,
  ...mentors2,
};

//rest operator

const greetFriends = (...friends: string[]) => {
  friends.forEach((f: string) => console.log(f));
};

greetFriends("abul", "kabul", "babul");

//destructuring

const user4 = {
  id: 345,
  name: {
    firstName: "sabrina",
    lastName: "khan",
  },
  contact: "233232323",
  address: "uganda",
};

const { contact } = user4;

//array destructuring

const myF = ["joey", "ross", "monica"];
const [a, b, bestF] = myF;

{
  //type alias

  const student: {
    name: string;
    age: number;
    gender: string;
  } = {
    name: "sab",
    age: 23,
    gender: "fem",
  };

  const student2: {
    name: string;
    age: number;
    gender: string;
  } = {
    name: "mir",
    age: 40,
    gender: "male",
  };

  type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: string;
  };

  const st3: Student = {
    name: "khan",
    age: 22,
    gender: "fem",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const uname: UserName = "someone";
  const admin: IsAdmin = true;

  type Add = (x: number, y: number) => number; //type alias for a func
  const add: Add = (x, y) => x + y;
}

////union types || or

{
  type FrontDev = "fakibazDev" | "juniorDev";
  type FullStackDev = "frontend" | "expertDev";
  type Dev = FrontDev | FullStackDev;

  const newDev: FrontDev = "juniorDev";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGrp: "O+" | "A+";
  };

  const user1: User = {
    name: "persian",
    gender: "male",
    bloodGrp: "A+",
  };

  //intersection : common properties -> one &

  type Front = {
    skills: string[];
    designation: "Frontend Developer";
  };
  type Back = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type Full = Front & Back;

  const fullStack: Full = {
    skills: ["html", "css", "express"],
    designation: "Frontend Developer",
    designation2: "Backend Developer",
  };
}

{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 15;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log(isAdult);

  //nullish coalescing operator
  // decision making on based of null or undefined

  const isAuth = null;

  const res1 = isAuth ?? "guest";
  console.log(res1);

  //optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "sab",
    address: {
      city: "dhk",
      road: "gh",
      presentAddress: "mohakhali",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });
}

{
  //nullable type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };
  searchName(null);

  //unknown type
  //finding type in runtime , like when using typeof in js.

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms^-1`);
    }

    if (typeof value === "string") {
      const [val, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(val) * 1000) / 3600;
      console.log(convertedSpeed);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond(1000);

  //never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  }; //this function will never return anything , so the type of this func is never

  throwError("mushkil se error hogaya");
}
