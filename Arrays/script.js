//Create an array of student names and print each
let arr = ['Jonas', 'Martha', 'Mikkel', 'Helge', 'Claudia'];
let print_Arr = arr.forEach(function (val) {
    console.log(val);
});

//Filter even numbers from an array
let Array_Integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_elements = Array_Integers.filter(function (val) {
    if (val % 2 === 0) return val;
})
console.log(even_elements);

//Map prices to include GST (18%)
let Array_Prices = [200, 250, 700, 750, 800];
let map_prices = Array_Prices.map(function (val) {
    return val * 0.18;
})
console.log(map_prices);

//Reduce salaries to calculate total payroll
let Array_Sal = [1000, 4500, 25000, 5000];
let TotalPayRoll = Array_Sal.reduce((acc, val) => {
    return acc + val;
}, 0);
console.log(TotalPayRoll);

//Find the first student with grade A
let Array_Grade = ['B', 'C', 'Fail', 'A', 'D',];
let Grade_A = Array_Grade.find((val) => {
  if (val === 'A') return val;
}
)
console.log(Grade_A);

//Write a function to reverse an array
let Array_Number = [2, 4, 6, 8, 10, 12];
let ArrayReverse = Array_Number.reverse();
console.log(ArrayReverse);

// Sort array of ages in ascending order
let Array_Ages = [30, 45, 18, 12, 95, 68];
console.log(Array_Ages.sort(function (a, b) {
    return a - b; // for descending order use b-a 
}));

//Destructure first two elements of an array
let Array_elements = [2, 4, 5, 6, 7, 8, 9, 10, 45];
let [a, b, c, , d] = Array_elements;
console.log(d);

//Use some() to check if any student failed
let Array_Marks = [68, 45, 90, 85, 30, 15];
let Fail = Array_Marks.some((val) => {
    return val < 35;
})
let Efail = Array_Marks.every((val) => { //checks if all the elements satisfy the condition
    return val >35 
})
console.log(Fail,Efail);

//Use spread to copy and add new item
let Array_n = [1, 4, 5, 7, 8, 9, 10];
let ArraySpread = ["India", ...Array_n];
console.log( ArraySpread );
