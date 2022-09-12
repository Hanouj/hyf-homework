const arguments = process.argv.slice(2); // we use the slice function to get rid of the first two elements
let sum = arguments.reduce((a, b) => a + parseInt(b), 0); // reduce to a single number, parse the arg into numbers before trying to do the sum
console.log(`the sum is: ${sum}`);

// $ node nodejs/week1/avg 13 7 4
// the sum is: 24

const average = sum / arguments.length;
console.log(`the average is: ${average}`);
// $ node nodejs/week1/avg 13 7 4
// the sum is: 24
// the average is: 8
