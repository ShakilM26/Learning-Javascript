// adding element to the end of an array 
// push()  method 
footballers = ['Cristiano', 'Messi', 'Ramos', 'Kaka']
footballers.push('Ozil', 'Benzema')
console.log(footballers)


// Adding an element to the beginning of an array
// unshift()  method
superheroes = ['Superman', 'Iron man', 'Doctor Strange']
superheroes.unshift('Captain America', 'Batman')
console.log(superheroes)


// removing an element to the end of an array
footballers.pop();
console.log(footballers)

// removing an element to the beginning of an array
superheroes.shift();
console.log(superheroes)


// find index of an element
index = footballers.indexOf('Ozil')
console.log(index)

// checking array or not 
console.log(Array.isArray(superheroes)) // true 
console.log(Array.isArray(defender)) // Error 