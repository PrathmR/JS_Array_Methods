// //ARRAYS

// /*const frinds = ['hi','hello', 'history'];
// console.log(frinds); 
// console.log(frinds[0]);
// console.log(frinds[2]);
// frinds[2]='helllo'
// console.log(frinds[2]); */

// // const calAge= function(birthYear){
// //     return 2037- birthYear;
// // }
// // const year = [ 1990, 1980, 1970, 2000];
// // const age1= calAge(year[0]);
// // const age2= calAge(year[1]);
// // const age3= calAge(year[2]);
// // console.log(age1,age2,age3);

// // const ages=[calAge(year[0]),calAge(year[1]),calAge(year[2]),];
// // console.log(ages);

// const frinds = ['hi','hello', 'history'];
// frinds.push('jay')//adding element ate the end
// console.log(frinds);

// frinds.unshift('john'); //adding element at the strat
// console.log(frinds);
// frinds.pop(); //removing from last
// const popped= frinds.pop();
// console.log(popped);
// console.log(frinds);

// //finding index
// console.log(frinds.indexOf('hi'));
// console.log(frinds.indexOf('Hi')); // returns -1 if the element is not present in array
// // checking if a element is present
// console.log(frinds.includes('hi')); //returns true
// console.log(frinds.includes('Hi'));// returns false

// //example
// if(frinds.includes('hi')){
//     console.log('you have a friend named hi');
// }

// /*CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.*/

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
 
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 
// console.log(bills, tips);


//objects
// const jonas = {
//     firstName : 'Prathmesh',
//     lastName : 'redekar'
// };
// console.log(jonas);
// //accessing data from objects
// console.log(jonas.firstName); //dot
// console.log(jonas['lastName']);//brackets



//challenge
//

// function generateOTP(length){
//     let otp ='';
//     for (let i =0; i<length; i ++){
//         otp += Math.floor(Math.random() *10);
//     }
//     return otp;
// }
// console.log(generateOTP(4))


/* copying array element to other array
array1 =["hi", "hello", 23, 'hey'];
array2=[];
for (let i =0; i<array1.length ; i ++){
    array2.push(array1[i]);
}
console.log(array1, array2); */


// const obj =[
//     'first : name',
//     'last : lname',
//     19,
//     true
// ]

// for(let i =0 ; i<obj.length; i++){
//     if(typeof obj[i] !== 'string' ) continue;
//     console.log(obj[i]);
// }
// for(let i =0 ; i<obj.length; i++){
//     if(typeof obj[i] === 'number' ) break;
//     console.log(obj[i]);
// }


/* Write your code below. Good luck! 🙂 */
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
 
 
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
 
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push( bills[i] +tip ) ;
// }
 
// console.log(bills, tips, totals);

    




