// without condition
for (i = 1; ; i += 3) {
  console.log(i);
  if (i > 10) {
    break;
  }
}

// Display Sum of n Natural Numbers
var sum = 0;
var n = 100;

for (i=0; i<=n; i++){
  sum = sum+i;
}
console.log(sum)