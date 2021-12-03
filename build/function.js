"use strict";
function getName() {
    return "hello my name is dandy";
}
console.log(getName());
function getAge() {
    return 23;
}
console.log(getAge());
function printName() {
    console.log("print name");
}
// arguments
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(2, 6);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
console.log(Add(1, 5), "aaaa");
// default parameter
const fullName = (first, last = 'Raspudi') => {
    return first + ' ' + last;
};
console.log(fullName('Dandy'));
