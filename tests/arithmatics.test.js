const { add, subtract, divide, multiply, power } = require('../src/arithmatics');

describe('Arithmatics test', () => {
    test('Addition', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Subtraction', () => {
        expect(subtract(2, 1)).toBe(1);
    });

    test('Multiplication', () => {
        expect(multiply(2, 2)).toBe(4);
    });

    test('Division', () => {
        expect(divide(4, 2)).toBe(2);
    });

    test('Power', () => {
        expect(power(3, 2)).toBe(9);
    });
});