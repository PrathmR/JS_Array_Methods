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
