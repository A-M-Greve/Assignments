ES5 Global Constants

var PI = 3.14;

PI = 42; // stop me from doing this!

ES2015 Global Constants
const PI = 3.14;
PI = 42; 

Quiz

// What is the difference between var and let?

    You can reassign and redeclare with var, but you can not redeclare using the let keyword. You can access a hoisted variable with var. Let creates block scope.

// What is the difference between var and const?

    You can reassign and redeclare with var, but you can not redeclare or reassign using the const keyword. You can access a hoisted variable with var. Const creates block scope.

// What is the difference between let and const?

    You can reassign with let, but you can not redeclare or reassign using the const keyword.

// What is hoisting?

    It’s the way to explain how the JS compiler works. Variables are lifting or “hoisted” to the top of the scope they are declared in. 