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