## 여러가지 타입 
```javascript
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type  ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Zenghyun',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add (a:Combinable, b:Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp:UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount:number) {
        console.log('Loading cargo... ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck(); 

function useVehicle(vehicle:Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);


interface Bird {
    type: "bird";
    flyingSpeed: number;
  }
  
  interface Horse {
    type: "horse";
    runningSpeed: number;
  }
  
  type Animal = Bird | Horse;
  
  function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
      case "bird":
        speed = animal.flyingSpeed;
        break;
      case "horse":
        speed = animal.runningSpeed;
        break;
    }
    console.log('Moving at speed: ' + speed);
  }
  
  moveAnimal({type:'bird', flyingSpeed:10});
```

<br>

## 형 변환
```javascript
1번 const userInputElement = <HTMLInputElement>document.getElementById('user-input');

2번 const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

3번 const userInputElement = document.getElementById('user-input');

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}
```

<br>

## 함수 오버로드
함수 오버로드: 동일한 함수에 대해 여러 함수 시그니처를 정의할 수 있는 기능을 말한다. 
간단히 말해 다양한 매개변수를 지닌 함수를 호출하는 여러 가지 가능한 방법을 사용하여 함수 내에서 작업을 수행할 수 있게 해준다. 

사용법: 주요 함수위에 같은 이름을 입력하고 특정 타입을 입력해준다. 

```javascript
function add (a: number, b:number): number;
function add (a: string, b:string): string;
function add (a:Combinable, b:Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Zenghyun', 'Max');
console.log(result.split(' '));

```

<br>

## 선택적 체이닝 연산자
```javascript
const fetchedUserData = {
  id: "u1",
  name: "Zenghyun",
  job: { title: "CEO", description: "My own company" },
};

1번 console.log(fetchedUserData.job && fetchedUserData.job.title);
2번 console.log(fetchedUserData?.job?.title); // ts 3.6 이상 version 부터 지원 
```

<br>

## Null 병합 연산자
```javascript
const userInput = '';

const storedData = userInput ?? 'DEFAULT'; 

console.log(storedData);
```
?? 앞에 있는 것이 null이거나 undefined라면 즉 빈 문자열이나 0이 아닌 null이나 undefined 둘 중 하나라면 풀백을 사용한다는 의미

<br>

## ref: [Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)