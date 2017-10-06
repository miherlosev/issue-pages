//Spread in function calls
function myFunction (x, y, z) {
}

var args = [0, 1, 2];
myFunction(...args);

//Spread in arrow function args
[0, 1, 2].forEach((...fnArgs) => {
    console.log(fnArgs);
});