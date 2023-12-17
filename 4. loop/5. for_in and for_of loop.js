// A for-in loop is used to loop through the properties of an object.

obj = {a:1, b:4, c:7};
for (i in obj){
  console.log(i + ':' + obj[i])
}


// A for-of loop is used to loop through the values of an iterable object (such as an array).

arr = [1,2,3];
for (val of arr){
  console.log(val)
}