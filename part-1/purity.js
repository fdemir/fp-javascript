let z = 10;

/*
- Pure Functions -
They only operate on their input parameters.
That’s a pure function. If the add function did access z, it would no longer be pure.
*/
function add(x, y) {
    return x + y
}


// Most useful Pure Functions must take at least one parameter.
function justTen() {
    return 10;
}
// It would be better if justTen was defined as a constant.
const JUST_TEN = 10


// All useful Pure Functions must return something.

// Pure Functions will always produce the same output given the same inputs.

add(1,2) // -> 3

// Pure functions have no side effects.
