{
  //oop - class

  class Animal {
    public name: string; // public is already by default, you can mention or not.
    // species: string;
    sound: string;

    //parameter properties

    constructor(name: string, public species: string, sound: string) {
      this.name = name;
      //   this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    } // arrow func e "this" does not work. only on normal func.
  }

  const dog = new Animal("joey", "poodle", "bhau");
  //created dog instance from animal

  const cat = new Animal("billi", "deshi", "mew");
  //class er var is called property, and func is called method

  //   cat.makeSound();
}
{
  // Inheritance

  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numOfHours: number) {
      console.log(`${this.name} sleeps for ${numOfHours} hours`);
    }
  }

  class Student extends Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {
      super(name, age, address);
    }
  }

  const student1 = new Student("sab", 20, "uganda");
  student1.getSleep(10);

  class Teacher extends Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string,
      public designation: string
    ) {
      super(name, age, address);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} takes class for ${numOfClass} hours`);
    }
  }

  const teacher1 = new Teacher("khan", 40, "uganda", "professor");
  teacher1.takeClass(8);
}

{
  //type guard

  //type of --> works in runtime . works on js

  type Alphaneumeric = string | number;
  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  // in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    user.name = "sab";
    if ("role" in user) {
      console.log("admin");
    } else {
      console.log("normal");
    }
  };
}

{
  //instance of --> type guard in oop
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("i am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log("i am mewing");
    }
  }

  // smart way to handle instance guard
  const isDog = (animal: Animal) => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMew();
    }
  };

  const dog = new Dog("dog bhai", "dog");
  const cat = new Cat("cat bhai", "cat");

  cat.makeMew();
  dog.makeBark();

  getAnimal(dog);
  getAnimal(cat);
}

{
  //access modifier

  class Bank {
    readonly id: number;
    name: string;
    protected _balance: number; //  underscore is convention for declaring private vars
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance += amount;
    }
  }

  const goribManus = new Bank(111, "sab", 20);

  goribManus.addDeposit(300);

  class StudentAccount extends Bank {
    test() {
      //private vars not accessible in children. use protected to get access in children
      //this.
    }
  }
}
{
  //getter and setter funcs

  class Bank {
    readonly id: number;
    name: string;
    protected _balance: number; //  underscore is convention for declaring private vars
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance += amount;
    // }

    //getter
    get Balance() {
      return this._balance;
    }

    //setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const goribManus = new Bank(111, "sab", 20);

  // goribManus.addDeposit(300);
  const myBalance = goribManus.Balance;
  // function property er moto use kora jai.
  goribManus.deposit = 300078;
}
