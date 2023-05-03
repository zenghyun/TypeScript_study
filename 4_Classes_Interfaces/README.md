## 객체 지향 프로그래밍 

```javascript
class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

const accounting = new Department("Accounting");

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna' 이렇게도 추가가 가능하기 때문에 이 방법을 막는 것이 좋다. 

accounting.describe();
accounting.printEmployeeInformation();


```

<br>

```javascript
private employees: string[] = [];
```

위와 같이 이렇게 **private**를 추가하면 클래스 내의 객체 의외의 방법으로는 접근할 수 없다. 

<br>

## readonly 
```javascript
constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = n;
  }

```

이렇게 선언하면 id의 값을 바꾸려고 하면 바꿀 수 없다. 
readonly는 특정 속성이 초기화되고나면 이후에는 변경되어서는 안된다고 선언하는 것이다. 

## 타입 배정
클래스 내의 타입 배정과 protected, private, public과 같은 키워드들은 타입스크립트에서 사용할 수 있다. 

## setter getter 

```javascript
 get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value:string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addEmployee(value);
    }

    accounting.mostRecentReport = 'Year End Report'; // 세터는 메서드가 아니라 값처럼 접근해야 한다.

    console.log(accounting.mostRecentReport);

```

## 인터페이스
인터페이스는 객체의 구조를 설명한다. 

인터페이스는 타입스크립트에만 존재한다. 

인터페이스는 객체의 구조를 설명하기 위해서만 사용한다.

인터페이스 내에 readonly 제어자도 추가할 수 있다. 다만, public, private 등은 지정할 수 없다. 
