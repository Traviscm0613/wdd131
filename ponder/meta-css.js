// variables vs constant

const PI = 3.13;
let radius = 3;

let area = radius * radius * PI;

console.log(area);

let radius = 20; //changing radius
area = radius * radius * PI;
console.log(area);

// type coersion

const one = 1;
const two = '2';

let result = one * two;
console.log(result);

result = one + Number(two);
console.log(result);

