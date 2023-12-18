// write a function to add unlimited numbers

function addnum(...args){
  return args.reduce((total,num) => total+num);
}

console.log(addnum(20,40,50))
