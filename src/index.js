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
