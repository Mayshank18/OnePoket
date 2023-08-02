import { createInterface } from 'readline';

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a list of space-separated numbers: ', (input) => {
  const numbers = input.split(' ').map((num) => parseInt(num, 10));

  if (numbers.some(isNaN)) {
    console.log('Invalid input. Please enter numbers separated by spaces.');
  } else {
    const result = sumArray(numbers);
    console.log('Sum:', result);
  }

  rl.close();
});