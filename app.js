// inheritance
// const person = {
//  name: {
//    first: 'Elyan',
//    last: 'Kemble',
//  },
//  age: 32,
//  location: {
//    city: 'Garland',
//    state: 'Texas',
//    zip: 75040
//  },
//  occupation: 'Front-End Developer'
// }

// function introduce() {
//  console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
// }

// person.introduce = introduce;

// person.introduce();

// const person = {
//  name: {
//    first: 'Elyan',
//    last: 'Kemble',
//  },
//  age: 32,
//  location: {
//    city: 'Garland',
//    state: 'Texas',
//    zip: 75040
//  },
//  occupation: 'Front-End Developer',
//  introduce() {
//    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//  }
// }

// person.introduce();

// const cat1 = {
//  eyes: 2,
//  legs: 4,
//  fur: "Orange",
//  isAwake: true,
//  isMoving: false,
//  sleep() {
//    this.isAwake = false;
//  },
//  wake() {
//    this.isAwake = true;
//  },
//  sit() {
//    this.isMoving = false;
//  },
//  walk() {
//    this.isMoving = true;
//  },
//  speak() {
//    console.log("Meow...");
//  }
// }

// const cat2 = {
//  eyes: 2,
//  legs: 4,
//  fur: "Black and White",
//  isAwake: false,
//  isMoving: false,
//  sleep() {
//    this.isAwake = false;
//  },
//  wake() {
//    this.isAwake = true;
//  },
//  sit() {
//    this.isMoving = false;
//  },
//  walk() {
//    this.isMoving = true;
//  },
//  speak() {
//    console.log("Meow...");
//  }
// }

// const dog1 = {
//  eyes: 2,
//  legs: 4,
//  fur: "Gold",
//  isAwake: true,
//  isMoving: true,
//  sleep() {
//    this.isAwake = false;
//  },
//  wake() {
//    this.isAwake = true;
//  },
//  sit() {
//    this.isMoving = false;
//  },
//  walk() {
//    this.isMoving = true;
//  },
//  speak() {
//    console.log("Woof!");
//  }
// }

// const cow1 = {
//  eyes: 2,
//  legs: 4,
//  hair: "Brown",
//  isAwake: true,
//  isMoving: false,
//  sleep() {
//    this.isAwake = false;
//  },
//  wake() {
//    this.isAwake = true;
//  },
//  sit() {
//    this.isMoving = false;
//  },
//  walk() {
//    this.isMoving = true;
//  },
//  speak() {
//    console.log("Moo.");
//  }
// }

// class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 		this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
// 	  // return is not needed because the new object is returned by default
// 	}
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString() {
//    return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//  }
// }

// const cat1 = new Animal(2, 4, true, false);
// const cat2 = new Animal(2, 4, false, false);
// const dog1 = new Animal(2, 4, true, true);
// const cow1 = new Animal(2, 4, true, false);


// class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 		this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
// 	  // return is not needed because the new object is returned by default
// 	}
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString(animal = 'Animal') {
//     return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//   }
// }

// class Cat extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Meow...");
//   }
//   toString() {
//     return super.toString("Cat");
//   }
// }

// class Dog extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Woof!");
//   }
//   toString() {
//     return super.toString("Dog");
//   }
// }

// class Cow extends Animal {
//   constructor(hair, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.hair = hair;
//   }
//   speak() {
//     super.speak("Moo.");
//   }
//   toString() {
//     return super.toString("Cow");
//   }
// }

// const cat1 = new Cat("Orange", true, false);
// const cat2 = new Cat("Black and White", false, false);
// const dog1 = new Dog("Gold", true, true);
// const cow1 = new Cow("Brown", true, false);
// const human1 = new Human("Brown", true, true);
// class Human extends Animal {
//  const person = {
//   name: {
//     first: 'Elyan',
//     last: 'Kemble',
//   },
//   age: 32,
//   location: {
//     city: 'Garland',
//     state: 'Texas',
//     zip: 75040
//   },
//   occupation: 'Front-End Developer'
//  }
 
//  function introduce() {
//   console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//  }
//  constructor(name, age, location, occupation,hair, isAwake, isMoving) {
//   super(eyes, legs, isAwake, isMoving);
//   this.hair = hair;
//   this.name = name;
//   this.age = age;
//   this.location = location;
//   this.occupation = occupation;
//  }
//  speak() {
//   super.speak("Hello!");
//  }
//  toString() {
//   return super.toString("Human");
//  }
// }


// console.log(cat1.toString());
// console.log(human1.toString());

// class Learner {
//  #grades = [];
//  #name = {
//    first: '',
//    last: '',
//  }
//  #age;

// constructor(firstName, lastName, age) {
//  this.#name.first = firstName;
//    this.#name.last = lastName;
//    this.#age = age;
// }
// }

// const learner1 = new Learner('Leeroy', 'Jenkins', 18);

// class Learner {
//  #grades = [];
//  #name = {
//    first: '',
//    last: '',
//  }
//  #age;

// constructor(firstName, lastName, age) {
//  this.#name.first = firstName;
//    this.#name.last = lastName;
//    this.#age = age;
// }
//  get name() {
//    return this.#name.first + ' ' + this.#name.last; 
//  }
//  get age() {
//    return this.#age;
//  }

//  set grades(grade) {
//   // change the grade to a Number, in case it was provided as a String
//   grade = Number(grade);
//   // Only accept values between 0 and 100
//   if (grade >= 0 && grade <= 100) {
//     this.#grades.push(grade);
//   }

//   setGetGrades() {
//     return this.#grades;


// }

// }

// const learner1 = new Learner('Leeroy', 'Jenkins', 18);

// learner1.grades = 100;
// learner1.grades = 90;
// learner1.grades = 80;

// console.log(learner1.name);

class Animal {}
class Cat extends Animal {}
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

const cat1 = new SpottedTabby();
let object = cat1;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);