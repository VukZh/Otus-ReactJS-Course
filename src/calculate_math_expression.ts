import {Parser} from "expr-eval";
import {factorial} from "./math_operations/fct";
import {sum} from "./math_operations/sum";
import {mul} from "./math_operations/mul";
import {div} from "./math_operations/div";
import {sub} from "./math_operations/sub";
import {pow} from "./math_operations/pow";

export const calculate_math_expression = (math_expression: string): number => {

    const parser = new Parser();
    const tree = parser.parse(math_expression);

    // get object from type Expression
    const objTree = JSON.parse(JSON.stringify(tree));

    const cash: number[]=[];
    let arg1;
    let arg2;
    if (objTree.tokens.length === 1 && objTree.tokens[0].type === 'INUMBER') {
        return objTree.tokens[0].type.value;
    } else {
        for (let i = 0; i < objTree.tokens.length; i++) {
            if (objTree.tokens[i].type === 'INUMBER') {
                cash.push(objTree.tokens[i].value)
            }
            if (objTree.tokens[i].type === 'IOP1') {
                arg1 = cash.pop() as number;
                console.log('c1', cash, arg1)
                cash.push(factorial(arg1))
            }
            if (objTree.tokens[i].type === 'IOP2') {
                arg1 = cash.pop() as number;
                arg2 = cash.pop() as number;
                console.log('c2', cash, arg1, arg2)
                switch (objTree.tokens[i].value) {
                    case '+': {
                        cash.push(sum(arg1, arg2));
                        break
                    }
                    case '-': {
                        cash.push(sub(arg2, arg1));
                        break
                    }
                    case '*': {
                        cash.push(mul(arg2, arg1));
                        break
                    }
                    case '/': {
                        cash.push(div(arg2, arg1));
                        break
                    }
                    case '^': {
                        cash.push(pow(arg2, arg1));
                        break
                    }
                }
            }
        }
    }

    console.log('test >>>', tree.evaluate())

    return cash[0];
}

