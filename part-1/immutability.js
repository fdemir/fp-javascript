// There are no variables in Functional Programming.

// Let’s think about when we want to modify variables. 
// There are 2 general cases that come to mind: multi-valued changes (e.g. changing a single value of an object or record) 
// and single-valued changes (e.g. loop counters).

// Functional Programming uses recursion to do looping.

// simple loop
var acc = 0;
for (var i = 1; i <= 10; ++i)
    acc += i;
console.log(acc) // -> 55

// without loop construct or variables (recursion)
function sumRange(start, end, acc) {
    if (start > end)
        return acc;
    return sumRange(start + 1, end, acc + start)
}
console.log(sumRange(1, 10, 0)); // -> 55

// without loop construct or variables (recursion)
