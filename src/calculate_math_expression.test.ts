import {calculate_math_expression} from "./calculate_math_expression";

describe ('calculate math expressions', () => {
    test ('2 + 2 / 0.5 = 6', () => {
        expect(calculate_math_expression('2 + 2 / 0.5')).toBe(6)
    })
    test ('(2 + 2) / 0.5 = 8', () => {
        expect(calculate_math_expression('(2 + 2) / 0.5')).toBe(8)
    })
    test ('3! + 3^2 = 15', () => {
        expect(calculate_math_expression('3! + 3^2')).toBe(15)
    })
    test ('(1 + 2) * 3 - 100 / 5 = -11)', () => {
        expect(calculate_math_expression('(1 + 2) * 3 - 100 / 5')).toBe(-11)
    })
})