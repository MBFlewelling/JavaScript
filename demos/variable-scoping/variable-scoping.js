// Old-style variable scoping
var oldX = 10;

console.log( 'oldX is ', oldX );

// Scoped as a constant, it cannot change
const CONST_X = 1;

// Uncomment this to get an error
// CONST_X = 2;

console.log( 'CONST_X is ', CONST_X );

// Scoped with let, it can change
let newX = 5;
newX = 6;

console.log( 'newX is ', newX );

