// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, 
    divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, 
    getSecondItem, getLastItem, getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('should add exclamation points to string', (expect) => {
    const expected = '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected);

    const expected2 = 'bunny rabbit!!!';

    const actual2 = addExclamationPoints('bunny rabbit');
    
    expect.equal(actual2, expected2);

    const expected3 = 'oh no!!!';

    const actual3 = addExclamationPoints('oh no');
    
    expect.equal(actual3, expected3);
});

test('should take a number, multiply it by seven, and then return the product', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);

    const expected2 = 35;

    const actual2 = multiplyBySeven(5);
    
    expect.equal(actual2, expected2);

    const expected3 = 49;

    const actual3 = multiplyBySeven(7);
    
    expect.equal(actual3, expected3);
});


test('multiply a number by 12 then divide it in half', (expect) => {
    const expected = 6;

    const actual = multiplyBy12ThenHalve(1);

    expect.equal(actual, expected);

    const expected2 = 24;

    const actual2 = multiplyBy12ThenHalve(4);
    
    expect.equal(actual2, expected2);

    const expected3 = 18;

    const actual3 = multiplyBy12ThenHalve(3);
    
    expect.equal(actual3, expected3);
});

test('first number divided by second number then multiplied by the third number ', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = 15;

    const actual2 = divideThenMultiply(9, 3, 5);
    
    expect.equal(actual2, expected2);

    const expected3 = 10;

    const actual3 = divideThenMultiply(10, 5, 5);
    
    expect.equal(actual3, expected3);
});

test('takes in three numbers and returns an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);

    const expected2 = [9, 3, 5];

    const actual2 = returnAsAnArray(9, 3, 5);
    
    expect.deepEqual(actual2, expected2);

    const expected3 = [2, 1, 5];

    const actual3 = returnAsAnArray(2, 1, 5);
    
    expect.deepEqual(actual3, expected3);
});

test('takes in three numbers and returns them as a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = '935';

    const actual2 = returnAsAString(9, 3, 5);
    
    expect.equal(actual2, expected2);

    const expected3 = '2000100566';

    const actual3 = returnAsAString(2000, 100, 566);
    
    expect.equal(actual3, expected3);
});

test('takes in two numbers and adds them together then places the sum into a string', (expect) => {
    const expected = 'Hello! your lucky number for the day is 12';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);

    const expected2 = 'Hello! your lucky number for the day is 32';

    const actual2 = makeLuckyGreeting(15, 17);
    
    expect.equal(actual2, expected2);

    const expected3 = 'Hello! your lucky number for the day is 40';

    const actual3 = makeLuckyGreeting(20, 20);
    
    expect.equal(actual3, expected3);
});


test('get second item from array', (expect) => {
    const fruits = ['kiwi', 'apple', 'orange', 'plum'];
    const expected = 'apple';

    const actual = getSecondItem(fruits);

    expect.equal(actual, expected);

    const cars = ['volvo', 'toyota', 'hyundai', 'kia']
    const expected2 = 'toyota';

    const actual2 = getSecondItem(cars);
    
    expect.equal(actual2, expected2);

    const sounds = ['quack', 'woof', 'boing', 'cacaw'];
    const expected3 = 'woof';

    const actual3 = getSecondItem(sounds);
    
    expect.equal(actual3, expected3);
});

test('get last item from array', (expect) => {
    const fruits = ['kiwi', 'apple', 'orange', 'plum'];
    const expected = 'plum';

    const actual = getLastItem(fruits);

    expect.equal(actual, expected);

    const cars = ['volvo', 'toyota', 'hyundai', 'kia'];
    const expected2 = 'kia';

    const actual2 = getLastItem(cars);
    
    expect.equal(actual2, expected2);

    const sounds = ['quack', 'woof', 'boink', 'cacaw'];
    const expected3 = 'cacaw';

    const actual3 = getLastItem(sounds);

    expect.equal(actual3, expected3);
});

test('returns a random number between 0 and 5', (expect) => {
    const answer = getRandomNumber();
    // const expected = answer = 0 || answer = 1 || answer = 2 || answer = 3 || answer = 4 || answer = 5;

    // const actual = getRandomNumber();

    expect.equal(typeof answer, 'number');
});




skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

