import {Parser} from "expr-eval";
import {factorial} from "./math_operations/fct";
import {sum} from "./math_operations/sum";
import {mul} from "./math_operations/mul";
import {div} from "./math_operations/div";
import {sub} from "./math_operations/sub";
import {pow} from "./math_operations/pow";
import {sin} from "./math_operations/sin";
import {cos} from "./math_operations/cos";

export const calculate_math_expression = (math_expression: string): number | unknown => {

    try {

        const parser = new Parser();
        const tree = parser.parse(math_expression);

        // get object with tokens field from type Expression
        const objTree = JSON.parse(JSON.stringify(tree));

        if (objTree.tokens.some((token: { type: string; }) => token.type === 'IVAR')) throw Error('wrong expression')

        const cash: number[]=[];
        let arg1;
        let arg2;
        if (objTree.tokens.length === 1 && objTree.tokens[0].type === 'INUMBER') {
            return objTree.tokens[0].value;
        } else {
            for (let i = 0; i < objTree.tokens.length; i++) {
                if (objTree.tokens[i].type === 'INUMBER') {
                    cash.push(objTree.tokens[i].value)
                }
                if (objTree.tokens[i].type === 'IOP1') {
                    arg1 = cash.pop() as number;
                    switch (objTree.tokens[i].value) {
                        case '!': {
                            cash.push(factorial(arg1));
                            break
                        }
                        case 'sin': {
                            cash.push(sin(arg1));
                            break
                        }
                        case 'cos': {
                            cash.push(cos(arg1));
                            break
                        }
                    }

                }
                if (objTree.tokens[i].type === 'IOP2') {
                    arg1 = cash.pop() as number;
                    arg2 = cash.pop() as number;
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

        return cash[0];
    } catch (e) {
        // @ts-ignore
        console.error(e.message)
    }
}

