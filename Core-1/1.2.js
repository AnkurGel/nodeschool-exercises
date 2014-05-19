//Write a program that accepts one or more numbers as command-line arguments 
//and prints the sum of those numbers to the console (stdout).

sum = process.argv.slice(2,process.argv.length).reduce(function(x, y){
  return +x + +y;
});

console.log(sum);
