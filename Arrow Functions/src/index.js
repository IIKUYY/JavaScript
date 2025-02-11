const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sum = (a, b) => a + b;

const askVal = () => {
    rl.question('Type your first value: ', (value1) => {
      rl.question('Type your second value: ', (value2) => {
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
        if (isNaN(num1) || isNaN(num2)) {
          console.log('Please type accepted values');
        } else {
          const output = sum(num1, num2);
          console.log(`The sum between ${num1} and ${num2} is: ${output}`);
        }
        rl.close();
      });
    });
  };

askVal();