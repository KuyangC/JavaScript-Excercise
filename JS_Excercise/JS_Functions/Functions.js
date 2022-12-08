/*
JS Functions
JS Functions is a block of code desined to perform a particular
task.
JS Functions is executed when "something" invokes it (calls it).
*/

{
    // Function to compute the product of p1 and p2
    function myFunction(p1, p2) {
        p1 = 5;
        p2 = 3;
        return p1 * p2;
    }
    console.log(myFunction);
}

/*
JS Functions Syntax
JS function is defined with the "functions" keyword, followed
by a name, followed by parentheses().

Functuins names can contain letters, digits, underscores,
and dollar signs (same rules as variables).

THe parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...) 
The code to be executed, by the function,is placed inside culy brackets: {}

functions name(parameter1, parameter2, parameter3) {
    // code to be executed
}

Function parameters are listed inside the parentheses()
in the function definition.

inside the function, the arguments (the parameters) behave
as local variables.
*/

/*
Function Return
When JS reaches "return" statement, the function will stop
execute. Example :
{
    let x = myFunction(4, 3);   // Func is called, return value will end
    up in x
}

function myFunction(a, b) {
    return a * b;               // Function return the product of a and b
}
*/

/*
Local Variables
Variables declared within JS Func, become LOCAL to the func.
local variables can oly acc from within the func.
example:
// code here can't use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}
// code here  can't use carName

*/


