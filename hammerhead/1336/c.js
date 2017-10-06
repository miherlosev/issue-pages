//Spread in destructuring
const [x1, y1, ...z1] = ['a'];
console.log(x1, y1, z1);

//Spread in object literals
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
console.log(clonedObj);

var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);