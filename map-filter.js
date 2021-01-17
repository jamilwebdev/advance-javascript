//const numbers = [3,5,6, 7, 8, 9];



//filter
//const bigger = numbers.filter(x => x > 5);
//console.log(bigger);

//find

//const bigger = numbers.find(x => x > 5);
//console.log(bigger);

// map

const roll = [4, 5 , 7, 8, 9, 10];
// const output =[];

// for(let i =0; i < roll.length; i++){
//     const element = roll[i];
//     const result = element * element;
//     output.push(result);

// }
// console.log(output);

// roll.map(function(element, index, array){
//     console.log(element, index, array);
// })

//  const result = roll.map(x => x * x);
//  console.log(result);
// map implement

const student = [
    {id:71, names :'akash'},
    {id: 41, names :'batash'},
    {id: 31, names : 'nodi'},
    {id: 42, names : 'sagur'}
];

const result = student.map( s => s.id);
const result2 = student.map( s =>s.names );
const result3 = student.filter(s =>s.id < 45);
const result4 = student.find(s =>s.id < 35);
console.log(result4);

