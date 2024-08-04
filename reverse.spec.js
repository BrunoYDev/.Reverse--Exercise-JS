const reverse = require('./reverse');
// All my tests to verify if my reverse function works properly.
// To run the tests install the jest lib using: npm install jest.
// Go to package.json and create a "scripts": "test": "jest".
// Run npm test reverse.spec.js to run all the tests.

test('Invert a simple string array', () => {
    expect(reverse(['b','o','l','o'])).toEqual(['o','l','o','b']);
});

test('Invert a simple number array', () => {
    expect(reverse([1,2,3,4,5])).toEqual([5,4,3,2,1]);
});

test('Palindrome in array', () => {
    expect(reverse(['r','a','c','e','c','a','r'])).toEqual(['r','a','c','e','c','a','r']);
});

test('Don\'t Accept Numbers', () => {
    expect(reverse(1234)).toBe('Not array!');
})

test('Don\'t Accept Strings', () => {
    expect(reverse('racecar')).toBe('Not array!');
})

test('Don\'t Accept object', () => {
    expect(reverse({1: '1',2: '2'})).toBe('Not array!');
})

test('Should work with empty arrays', () => {
    expect(reverse([])).toEqual([]);
});

test('Don\'t modify the original array', () => {
    const input = [1, 2, 3];
    const inputCopy = [...input];
    reverse(input);
    expect(input).toEqual(inputCopy);
});

test('Should work with multiple types array', () => {
    expect(reverse([1, 'b', true, null])).toEqual([null, true, 'b', 1]);
});