# Core Types

## number 
**ex) 1, 5.3, -10** => All numbers, no differentiation between integers or floats 

## string
**ex) 'Hi', "Hi", `Hi`** => All text values 

## boolean
**ex) true, false** => Just these two, no "truthy" or "falsy" values 

## object
**ex) {age:27}** => Any JavaScript object, more specific types (type of object) are possible 

## Array
**ex) [1,2,3]** => Any JavaScript array, type can be flexible or strict (regarding the element types)

## Tuple 
**ex) [1,2]** => Added by TypeScript: Fixed-length array

## Enum
**ex) enum {NEW, OLD}** => Added by TypeScript: Automatically enumerated global constant identifiers

```javascript
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Zenghyun",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if(person.role === Role.ADMIN) {
    console.log('is admin');
}
```

## Any
ex) * => Any kind of value, no specific type assignment

****




## Union Type 

유니언 타입을 사용하면 코드에 적용한 매개변수를 보다 유연하게 사용할 수 있다. 

```javascript
const combine = (input1: number | string, input2: number | string) => {
    let result;
    if( typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    } 
    return result;
};


const combinedAges = combine(30, 25);
console.log("🚀  combinedAges", combinedAges)

const combinedNames = combine('Zenghyun', 'Sion');
console.log("🚀  combinedNames", combinedNames)

```

```javascript
const combine = (
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === 'as-number') {
  //     return +result;
  // } else {
  //     return result.toString();
  // }
  return result;
};

const combinedAges = combine(30, 25, "as-number");
console.log("🚀  combinedAges", combinedAges);

const combineStringAges = combine("30", "26", "as-number");
console.log("🚀  combineStringAges", combineStringAges);

const combinedNames = combine("Zenghyun", "Sion", "as-text");
console.log("🚀  combinedNames", combinedNames);

```

위와 같이 유니언 타입을 사용할 때 반복되는 것은 타입 앨리어스(type alias)를 사용하면 좋다. 

<br>

## Type Alias 

```javascript
type Combinable = number | string;

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: "as-number" | "as-text"
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === 'as-number') {
  //     return +result;
  // } else {
  //     return result.toString();
  // }
  return result;
};

const combinedAges = combine(30, 25, "as-number");
console.log("🚀  combinedAges", combinedAges);

const combineStringAges = combine("30", "26", "as-number");
console.log("🚀  combineStringAges", combineStringAges);

const combinedNames = combine("Zenghyun", "Sion", "as-text");
console.log("🚀  combinedNames", combinedNames);

```

<br>

## Type Alias Object Type 

타입 별칭을 사용하여 타입을 직접 “생성”할 수 있습니다. 유니온 타입을 저장하는 것만 가능한 것이 아닙니다. 복잡할 수 있는 객체 타입에도 별칭을 붙일 수 있습니다.

**예:**
```typescript
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

```
타입 별칭을 사용하면 불필요한 반복을 피하고 타입을 중심에서 관리할 수 있습니다.

예를 들어, 다음 코드를 아래와 같이 단순화할 수 있습니다.

```typescript
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

**단순화 후:**

```typescript
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```
