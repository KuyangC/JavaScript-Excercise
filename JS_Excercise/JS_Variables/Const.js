/*
JS Const
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.
*/

/* When to use JS Const
Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp
*/

// Ex Const Array

//Create a constant array
const cars = ["Toyota", "Volvo", "Honda"];

//Change an "Toyota" element 
cars[0] = "BMW";

// You can add an element
cars.push("Audi");

console.log(cars);
//=================================//

//Constant Objects
//You can create a const object
const car = {type:"Toyota", model:"Kijang", color:"Black Metalic"};

//You can change a property:
car.color = "red";

//You can add a property:
car.owner = "Bintang";

console.log(car)

//Block Scope
//Declaring a variable wit "const" is simmilar to "let" when it comes to BLOCK SCOPE
//The x declared in te block, in this example, is not the same as te x declared outside the block:

//here x is 10
const x = 10;

{
    const x = 2;
    //here x is 2
    console.log(x);
}

console.log(x);
//here x is 10