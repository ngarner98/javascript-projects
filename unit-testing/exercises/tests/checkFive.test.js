const checkFive = require('../checkFive.js');

describe('checkFive', () => {
    test('correct output given < 5', () =>{
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    test('correct output given > 5', () =>{
        let output = checkFive(6);
        expect(output).toEqual("6 is greater than 5.");
    });
    test('correct output given = 5', () =>{
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
});