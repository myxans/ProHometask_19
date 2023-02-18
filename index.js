function test() {
    const names = Array.from(arguments);
    return arguments.length == 1 ? `Hello ${names}` : `Hello guys, ${names}!`
};
console.log(test('Dima'));
console.log(test('Dima', ' Vasya', ' Petya'));