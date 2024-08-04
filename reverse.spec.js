const reverse = require('./reverse');

test('invert a simple array', () => {
    expect(reverse(["b","o","l","o"]).toBe(["o","l","o","b"]));
});

