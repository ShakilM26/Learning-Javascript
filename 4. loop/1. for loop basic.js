// for (initialExpression; condition; updateExpression) {
    // statements}

A for loop is used when you know how many times you need to repeat a certain block of code. It takes three statements.
* Initialization statement
* Condition Statement
* Increment statement.
    
// first example

var num = 0;
for (i = num; i <= 5; i++){
  console.log(i);
}

// another example

var num = 5;
for (i=1; i<=num; i++){
  console.log('I love Javascript');
}

// without the initializer

var i = 0;
for (; i<10; i++) {
  console.log(i);
}
