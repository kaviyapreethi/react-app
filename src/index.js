import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root"));

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
    //let x = 1;
  }
  console.log(i); // can be accesible outside function
  //console.log(x); // can not be accesible outside block
  const y = 1;
  //y = 2;  // cannot re-assign the value. It is a Syntax error : x is read-only
  console.log(y);
}
sayHello();
//So in ES6 we prefer ‘let’ to avoid access outside the block.
//And prefer ‘const’ to avoid re-assigning the value.

const person = {
  name: "Kaviya", //property
  walk() {
    console.log(this);
  }, //method
  talk() {} //method
};
console.log(person.name);
console.log(person.talk());
console.log((person.name = "Kavi"));
const targetMember = "name";
console.log((person[targetMember.value] = "Kavs"));

person.walk();
const walk = person.walk;
console.log(walk);

walk(); //reference to the global object. Which is the window object. Since strict mode is enabled the output is undefined.

const walk_enable = person.walk.bind(person); // person.walk is an object. bind is a member, used to bind a function to an object
walk_enable(); //now bind has fixed the strict mode problem

const square = function(number) {
  return number * number;
};
console.log(square(5));

const arrow_square = number => number * number; // precise the code using arrow.
console.log(arrow_square(10));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});
console.log(activeJobs);

const arrow_activeJobs = jobs.filter(job => job.isActive); // using arrow function
console.log(arrow_activeJobs);

const student = {
  exam() {
    setTimeout(() => {
      //in callbak functions strict mode can't override. this returns the reference to the window object. so use arrow, thus this returns the reference to the student object.
      console.log("this", this);
    }, 1000);
  }
};
student.exam();

const colors = ["red", "white", "blue", "pink", "yellow"];
const items = colors.map(color => `<li>${color}</li>`); //array.map method
console.log(items);

//destructuring
const address = {
  street: "",
  city: "",
  country: ""
};

//const street = address.street;
//const city = address.city;
//const country = address.country;

const { street, city, country } = address; // instead of '.' notation we follow destructuring
const { street: st } = address; // st is the alias name to call the constant street

console.log(address);
