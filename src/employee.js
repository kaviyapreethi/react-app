//Class if we have 2 different objects with same method name,
//then things get complicated. So we create a blueprint of it to reduce the multiple copies.

export class Employee {
  constructor(empName) {
    this.empName = empName;
  }
  project() {
    console.log(
      `Hi ${this.empName} This Project is called from Employee class`
    );
  }
}
