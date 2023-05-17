abstract class Department1 {
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department1): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee2 = Department1.createEmployee("Zenghyun");
console.log(employee2, Department1.fiscalYear);

class ITDepartment2 extends Department1 {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID:" + this.id);
  }
}

const it2 = new ITDepartment2("d1", ["Zenghyun"]);

it2.addEmployee("Max");
it2.addEmployee("Manu");

it2.describe();
it2.printEmployeeInformation();

console.log(it2);

class AccountingDepartment2 extends Department1 {
  private lastReport: string;
  private static instance: AccountingDepartment2;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment2.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment2("d2", []);
    return this.instance;
  }
  describe() {
    console.log("Accounting Department - ID:" + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

const accounting2 = AccountingDepartment2.getInstance();
accounting2.addReport('Something went wrong!..');
console.log(accounting2.mostRecentReport);

accounting2.addEmployee('Max');
accounting2.addEmployee('Manu');

accounting2.printReport();
accounting2.printEmployeeInformation();
accounting2.describe();

console.log(accounting2);