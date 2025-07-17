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
