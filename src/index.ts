// import readlineSync from 'readline-sync';
import { calculate_math_expression } from './calculate_math_expression';

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

const infiniteInput = () => {
  rl.question('> ', function (mathExpression: string) {
    if (mathExpression == 'exit') return rl.close();
    console.log(calculate_math_expression(mathExpression));
    infiniteInput();
  });
};
infiniteInput();
