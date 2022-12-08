//JS Variable can hold different data types: Numbers, Strings, Objects, and more:
{
    let length = 16;                            // Numbers
    let lastName = "Johnson";                   // String
    let x ={firstName:"John", lastName:"Doe"};  // Object
    console.log(x)
}

/*
The Concept of Data Types
In Programming, data types is an important concept.
*/

/*
JS Types are Dynamic
JS has dynamic types. This means that the same
variable can be used to hold different data types
Example
*/
{
    let x;          // Now x is Undefined
    x = 5;          // Now x is a Number
    x = "John";     // Now x is String
}
/*
JS Strings
A string is a series of characters like "John Doe".
Strings are written with quotes. You can use single or double quetes:
*/
{
    let merk1 = "Toyata Kijang"; // Using Double quotes
    let merk2 = 'Toyota Kijang'; // Using Single quotes
}

//JS Numbers
/*
JS has only one type of numbers.
Numbercan be written with, or without decimals
*/
{
    let x1 = 34.00;     // Written with Decimals
    let x2 = 34;        // Written without Decimalsa
}

/*
JS Booleans
Booleans can onlt have to values: True or False
Used in conditional testing
*/
{
    let x = 5;
    let y = 5;
    let z = 6;
    (x == y);
    (x == z);
}

/*
JS Array
JS Array are written with square brackets.
Array item are separated by commas.
Array indexes are zero-based, which means the first item
is [0], and the second is [1], and so on. (Same as Objects)
*/
{
    const cars = ["Toyota", "BMW", "Honda"];
}

/*
JS Objects
JS Objects are written with curly braces {}.
Object properties are written as name:value paris, separated by commas.
*/

{
    const person = {FirstName:"Satrio", LastName:"Beny", age:50, EyeColor:"brown"};
    console.log(person);
}

/*
The Typeof Operator
You can use the JS "typeof" operator to find the type of a JS
variable
The "typeof" operator returns the type of a variable or an expression:
*/

{
    typeof "";           // Returns "string"
    typeof "John";       // Returns "string"
    typeof "John Doe";   // Returns "string"
    typeof 314;          // Returns "number"
    typeof 3.14;         // Returns "number"
    typeof (3);          // Returns "number"
    typeof (3 + 4);      // Returns "number"
}

/*
Undefined
in JS, a variable without a value, has the value "undefined".
The type is also "undefined"
*/

{
    let car;            // Value is undefined, type is undefined
}

/*
Empty Values
An empty value has nothing to do with "undefined".
An empty string has both a legal value and type.
*/

{
    let car= "";        // The value is "", the typeof is "string"
}