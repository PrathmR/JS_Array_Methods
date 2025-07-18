/*Objects are structured state – perfect for modeling anything complex: a user, a form, a product,
 etc.
 Use destructuring, chaining, and dynamic keys wisely */




// Create an object for a book (title, author, price)
 
let book_obj = {
    title: 'Origin of species',
    author: 'Cahrles Darwin',
    price: 250
};
console.log(book_obj);

// Access properties using both dot and bracket
console.log(book_obj.title);
console.log(book_obj["author"]);

// Write a nested object (user with address and location)
let user_obj = {
    name: 'Prathmesh',
    Age: 20,
    Address: {
        State: 'Karnataka',
        City: 'Belgaum',
        location : 'Honaga'
    },
}
console.log(user_obj.Address.City);

// Destructure name and age from a student object
 
let { name, Age } = user_obj; //Taking Above example of user
console.log(name, Age);


// Loop through keys and values of an object
for (let key in user_obj) {
    console.log(key,user_obj[key]);
};


// Convert object to array using Object.entries()
console.log(Object.entries(user_obj)); 


// Copy an object using spread operator
let user2_obj = { ...user_obj };
console.log(user2_obj);


// Create a deep copy of an object with nested structure
let user3_obj = JSON.parse(JSON.stringify(user_obj));
console.log(user3_obj);


// Use optional chaining to safely access deep values
console.log(user_obj?.Address?.City); // Belgaum
console.log(user_obj?.profile?.email); // Undefined(no error)
