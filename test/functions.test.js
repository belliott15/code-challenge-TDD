// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, 
    divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, 
    getSecondItem, getLastItem, getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('add exclamation points', (expect) => {
    const expected = '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected);

    const expected2 = 'bunny rabbit!!!';

    const actual2 = addExclamationPoints('bunny rabbit');
    
    expect.equal(actual2, expected2);

    const expected3 = 'oh no!!!';

    const actual3 = addExclamationPoints('oh no');
    
    expect.equal(actual3, expected3, 'add exclamation points to string');
});

test('multiply by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);

    const expected2 = 35;

    const actual2 = multiplyBySeven(5);
    
    expect.equal(actual2, expected2);

    const expected3 = 49;

    const actual3 = multiplyBySeven(7);
    
    expect.equal(actual3, expected3, 'take a number, multiply it by seven, and then return the product');
});


test('multiply by twelve then halve it', (expect) => {
    const expected = 6;

    const actual = multiplyBy12ThenHalve(1);

    expect.equal(actual, expected);

    const expected2 = 24;

    const actual2 = multiplyBy12ThenHalve(4);
    
    expect.equal(actual2, expected2);

    const expected3 = 18;

    const actual3 = multiplyBy12ThenHalve(3);
    
    expect.equal(actual3, expected3, 'multiply a number by 12 then divide it in half');
});

test('divide then multiply', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = 15;

    const actual2 = divideThenMultiply(9, 3, 5);
    
    expect.equal(actual2, expected2);

    const expected3 = 10;

    const actual3 = divideThenMultiply(10, 5, 5);
    
    expect.equal(actual3, expected3, 'first number divided by second number then multiplied by the third number ');
});

test('return as an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);

    const expected2 = [9, 3, 5];

    const actual2 = returnAsAnArray(9, 3, 5);
    
    expect.deepEqual(actual2, expected2);

    const expected3 = [2, 1, 5];

    const actual3 = returnAsAnArray(2, 1, 5);
    
    expect.deepEqual(actual3, expected3, 'takes in three numbers and returns an array');
});

test('return as a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = '935';

    const actual2 = returnAsAString(9, 3, 5);
    
    expect.equal(actual2, expected2);

    const expected3 = '2000100566';

    const actual3 = returnAsAString(2000, 100, 566);
    
    expect.equal(actual3, expected3, 'takes in three numbers and returns them as a string');
});

test('make a lucky greeting', (expect) => {
    const expected = 'Hello! your lucky number for the day is 12';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);

    const expected2 = 'Hello! your lucky number for the day is 32';

    const actual2 = makeLuckyGreeting(15, 17);
    
    expect.equal(actual2, expected2);

    const expected3 = 'Hello! your lucky number for the day is 40';

    const actual3 = makeLuckyGreeting(20, 20);
    
    expect.equal(actual3, expected3, 'takes in two numbers and adds them together then places the sum into a string');
});


test('get second item', (expect) => {
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
    
    expect.equal(actual3, expected3, 'get second item from array');
});

test('get last item', (expect) => {
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

    expect.equal(actual3, expected3, 'get last item from array');
});

test('get a random number', (expect) => {
    const answer = getRandomNumber();

    const actual = getRandomNumber();
    const between0And5 = actual === 0
                    || actual === 1 
                    || actual === 2 
                    || actual === 3 
                    || actual === 4 
                    || actual === 5;
    // other option const between0And5 = [1, 2, 3, 4, 5].includes(actual);
    // better than nothing 
    expect.equal(between0And5, true);
});




skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

