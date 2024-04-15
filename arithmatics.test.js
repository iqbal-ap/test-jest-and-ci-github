const { add, subtract, divide, multiply } = require('./arithmatics');

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
});