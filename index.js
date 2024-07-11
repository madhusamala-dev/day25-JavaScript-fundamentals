// data types
/*
number
string
boolean
null
undefined
object

*/
let salary = 2342342.08;
let companyName = "TrainingMug";
let username = 'madhu samala';
let isExists = true;
let nullValue = null;
let password;

console.log("Salary : ", salary);
console.log("Name : " , companyName);
console.log("Username : " + username );
console.log(`User Name : ${username}`);
console.log("Exists : ", isExists);
console.log("Null Value : " , null);
console.log("Password :" , password);

console.log('Type of Salary ', typeof(salary));

// You can use the same format specifiers 

//objects

let user = {
    name : 'madhu samala',
    email : 'madhu@gmail.com',
    salary: 23423
}

console.log("User : " , user);
console.log('type of user', typeof(user));

function calculateTotalSalary(salary,percentage){
    return salary + (salary * percentage) / 100;
}

console.log("Updated Salary $:" , calculateTotalSalary(234234,23));


//Arrow functions
let greet = (message) => {
    return `Hello ${message}`;
}

console.log(greet('How are you '));

//Higher Order Functions
// A function which takes another function as a parameter and return a function as data

function calculateDiscount(percentage){
    return function(price){
        return price * percentage / 100;
    }
}

let laptopDiscountFn = calculateDiscount(10);
console.log(laptopDiscountFn(10000));

//IIFE (Immediately Invoked Function Expression)
((msg) => {
    console.log(`Hello ${msg}`);
})('How are you !');

//Callback functions
// Functions that are passed as parameters to another functions
// usually invoked in async programming

function fetchData(callbackFn) {
    setTimeout(()=>{
        let someData = "some data";
        callbackFn(someData);
    },1000);

}

fetchData((data) =>{
    console.log("Received Data : " , data);
})

// classes

class Product {

    constructor(id,name,price,discountPercentage){
        this.id = id;
        this.name = name;
        this.price = price;
        this.discountPercentage = discountPercentage
    }

    displayProduct(){
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
        console.log("Price : " + this.price);
        console.log("Discount Percentage : " + this.discountPercentage);
    }

    calculateFinalPrice(){
        return this.price - ( this.price * this.discountPercentage / 100 );
    }


}

let product1 = new Product(111,"Laptop", 23423,20);
product1.displayProduct();
let product2 = new Product(222,"mobile",23423,23);
console.log(product2.calculateFinalPrice());

// arrays

let numbers = [1,2,3,4,5];
numbers.push(6);
console.log("Push : " + numbers);
numbers.pop();
console.log(numbers);
//slice
numbers.slice(1,2);
console.log(numbers);

numbers.splice(1,2);
console.log(numbers);

// Arrow functions
numbers.forEach(number => console.log(number));

//map (create a new array by applying a function to each element)
let doubledElementsArray = numbers.map(number => number * 2);
console.log(doubledElementsArray);

//filter
let elements = numbers.filter(number => number > 3);
console.log(elements);

//find
let firstEven = numbers.find(number => number % 2 == 0);
console.log(firstEven);

//Reduce the array to a single value
let sum = numbers.reduce((accum,number) => accum + number, 0);
console.log(sum);

//sort
numbers.reverse().sort();
console.log(numbers);

//join all elements to a string with the given delimiter
let joined = numbers.join(",");
console.log(joined);


