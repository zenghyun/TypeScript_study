// type AddFn = (a: number, b:number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(1,2));

interface Named {
  readonly name?: string;
  outputNamed ? :string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
  outputNamed : string;
}

class Person implements Greetable {
  name?: string;
  age = 27;
  outputNamed = 'lee';

  constructor(n ?: string) {
    if(n) {
        this.name = n;
    }
        
  }

  greet(phrase: string) {
    if(this.name)  {
        console.log(phrase + " " + this.name);
        console.log(this.outputNamed);
    } else {
        console.log('Hi!');
    }
  }
}

let user1: Greetable;

// user1 = new Person();
user1 = new Person("Zenghyun");

user1.greet("Hi there I am");
console.log(user1);
console.log(Person);