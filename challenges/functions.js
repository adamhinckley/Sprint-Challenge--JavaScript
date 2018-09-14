// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
 * Create a function named consume that can take 3 parameters.
 * The first two parameteres can accept any argument
 * The last parameter accepts a callback 
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(prop1, prop2, cb) {
  return cb(prop1, prop2);
}


/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(prop1, prop2) {
  return (prop1 + prop2);
}

function multiply(prop1, prop2) {
  return (prop1 * prop2);
}

function greeting(prop1, prop2) {
  return `Hello ${prop1} ${prop2}, nice to meet you!`
}



/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Because lexical scope allows for a nested function to look outside for what it needs as long as it's inside function scope.  It does not have access to external on global scope.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();