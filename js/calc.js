



var a = prompt("Enter a number");
var b = prompt("Enter another number");
var op = prompt("Enter an operator: + - / *");

function Calc(a,b,op) {

if(op === "+") {
  return (a+b);
  } else if(op === "-") {
  return (a-b);
  } else if(op === "/") {
  return (a/b);
  } else if(op === "*") {
  return (a*b);
  } else {
  consol.log("Invalid Input!");
  }
}

alert(Calc(a,b,op))
