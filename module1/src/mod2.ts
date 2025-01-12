{
  //type assertion

  let anything: any;

  anything = "next level web dev";

  (anything as string).length;

  const kgtogm = (value: string | number) => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value) * 1000;
      return convertValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  //interface

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: "sab",
    age: 300,
  };

  // interface can be user for obj only, but type alias can be used for all prim and non prim types.

  type User1 = {
    name: string;
    age: number;
  };
  type UserWithRole1 = User1 & { role: string }; //new type with intersection , also possible with interface

  interface userWithRole2 extends User2 {
    role: string;
  } //interface with intersection, just need to use extends instead of &

  //array with interface
  //js--> object, array -> object , function ->object

  type Roll = number[];
  const rollNumber1: Roll = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  } //array declare with interface

  //function declare with interface

  type Add = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  // const add = (num1, num2) => num1 + num2;

  // generic type

  const rollNumbers: number[] = [3, 6, 8];

  const mentors: string[] = ["x", "y", "z"];

  const boolArr: boolean[] = [true, false, true];

  type GenericArray<T> = Array<T>;

  const roll: GenericArray<number> = [1, 2, 3];
  const ment: GenericArray<string> = ["a", "b"];

  //generic object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "sab",
      age: 2,
    },
    {
      name: "khan",
      age: 3,
    },
  ];

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const human: GenericTuple<string, string> = ["x", "xwife"];
  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "sab", email: "sab@sab.com" },
  ];
}

{
  // Generic with interface

  type GenericArray<T> = Array<T>;

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "sab",
      age: 2,
    },
    {
      name: "khan",
      age: 3,
    },
  ];

  //---

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "sab",
    computer: {
      brand: "Asus",
      model: "X255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "Oled",
    },
  };

  const richDeveloper: Developer<{
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }> = {
    name: "khan",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple",
      model: "something",
      heartTrack: true,
      sleepTrack: true,
    },
  };
}

// generic with function
{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("bd");
  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "sab",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res4 = createArrayWithTuple<string, number>("bd", 2);

  const addCourseToStudent = <T>(student: T) => {
    const course = "next level";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "sab",
    email: "sab@sab.com",
    devType: "frontend",
  });
  const student2 = addCourseToStudent({
    name: "khan",
    email: "khan@khan.com",
    hasWatch: "apple watch",
  });
}

{
  //  constraints
  // enforcing some kind of rule

  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "next level";

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 334,
    name: "ab",
    email: "ab2ab.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "sab",
    email: "sab@sab.com",
    devType: "frontend",
  });
  const student2 = addCourseToStudent({
    id: 333,
    name: "khan",
    email: "khan@khan.com",
    hasWatch: "apple watch",
  });
}

{
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle; // Vehicle key union, same as the above line

  const person1: Owner2 = "bike";

  const user = {
    name: "sab",
    age: 26,
    address: "dhk",
  };

  const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result1 = getProperty(user, "name");
}
{
  // promise in typescript
  //basic promise

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling promise func
  const showData = async () => {
    const data = await createPromise();
    console.log(data);
  };

  showData();
}
{
  //conditional type

  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false;

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; //

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  //car ase kina / bike ase? / ship kina/ tractor?
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"bike">;
}

{
  //mapped types

  const arr: number[] = [1, 2, 3];
  // const arrOfSt:string[] = ['1','2','3']
  const arrOfStrings: string[] = arr.map((num) => num.toString());

  type Area = {
    height: number;
    width: number;
  };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  type Height = Area["height"];

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 30,
  };
}

{
  //utility types

  //pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: number;
  };

  type Name = Pick<Person, "name" | "age">;

  //omit

  type ContactInfo = Omit<Person, "name" | "age">;

  //required, no optional , all property will be required

  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  //REadOnly

  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "sab",
    age: 25,
    contact: 12,
  };

  //Record
  // type MyObj = {
  //  a:string;
  //  b:string;
  // }

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "d",
  };

  const EmptyObj: Record<string, unknown> = {};
}
