import { Employee } from "./employee";

//inheritance
export class QA extends Employee {
  constructor(empName, role) {
    super(empName);
    this.role = role;
  }
  bugs() {
    console.log(`Hi ${this.empName} you have few bugs. Role is ${this.role}`);
  }
}
