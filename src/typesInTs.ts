let drink = "water"; // TypeScript infers the type as string
console.log(drink);

let cup = Math.random() > 0.5 ? 5 : "coffee"; // TypeScript infers the type as number | string (union type) 
console.log(cup);

let isHot: boolean = true; // Explicitly declaring the type as boolean

function add(a: number, b: number): number { // Function with typed parameters and return type
    return a + b;
}   

console.log(add(5, 10)); // Output: 15

interface Person { // Defining an interface for a person object
    name: string;
    age: number;
}
const person: Person = { // Creating an object that adheres to the Person interface
    name: "Bob",
    age: 30
};
console.log(person);

type ID = number | string; // Defining a type alias for a union type
let userID: ID = 12345;     
console.log(userID);
userID = "abcde"; // Reassigning with a string value, still valid due to union type
console.log(userID);

