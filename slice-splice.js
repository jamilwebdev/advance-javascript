const num = [1,2,3,4,5,6,7,8,9];
//const numbers = num.slice(2, 5);

const numbers = num.splice(2,5, 77);
console.log(numbers);
console.log(num);