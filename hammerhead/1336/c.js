//Spread in destructuring
const [x, y, ...z] = ['a'];
console.log(x, y, z);

//Spread in object literals
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
console.log(clonedObj);

var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);