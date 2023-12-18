// write a function to find Factorial of a number 
function getfactorial(num){
  if(num == 1){
    return 1;
  }
  if(num==0 || num<0){
    return 0;
  }
  return num*getfactorial(num-1);
}

console.log(getfactorial(5))
console.log(getfactorial(10))
