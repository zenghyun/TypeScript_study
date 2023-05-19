interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
type Capt = Person & Developer;

function introduce(someone: Person | Developer) {
  console.log(someone.name); // O 정상 동작
  // someone.age; // X 타입 오류
  // someone.skill; // X 타입 오류
}

function introduce2(someone: Capt) {
  console.log(someone.name, someone.age, someone.skill);
}

const zenghyun: Capt = {
  name: "zenghyun",
  age: 27,
  skill: "typescript",
};

introduce(zenghyun);
introduce2(zenghyun);

/**
 * 문자열을 받고 왼쪽에 "padding"을 추가합니다.
 * 만약 'padding'이 문자열이라면, 'padding'은 왼쪽에 더해질 것입니다.
 * 만약 'padding'이 숫자라면, 그 숫자만큼의 공백이 왼쪽에 더해질 것입니다.
 */
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    console.log(Array(padding + 1).join(" ") + value);
  }
  if (typeof padding === "string") {
    console.log(padding + value);
  }
  // throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // "Hello world"를 반환합니다.

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name: string) {
    console.log(`Hello, I'm ${name}.`);
  }
}

// 두 객체를 받아 하나로 합칩니다.
function extend<First extends {}, Second extends {}>(
  first: First,
  second: Second
): First & Second {
  const result: Partial<First & Second> = {};
  console.log(result);
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
      console.log(prop);
      console.log(first[prop]);
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
console.log(jim);