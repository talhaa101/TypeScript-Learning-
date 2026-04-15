let response : any = "543"; // A variable that can hold any type of value (any type)

let numericLength: number = (response as string).length; // Using type assertion to treat 'response' as a string and get its length

console.log(`The length of the response is: ${numericLength}`); // Output: The length of the response is: 3


type Book = {
    title: string;
}

let bookString =  '{"title": "who moved my chesse"}'; // A string that represents a book title
let book: Book = JSON.parse(bookString);
console.log(`The book title is: ${book.title}`); // Output: The book title is: who moved my chesse

const inputElement = document.getElementById("userInput") as HTMLInputElement; // Using type assertion to specify that the element is an HTMLInputElement

inputElement.value = "Hello, TypeScript!";  
console.log(`Input value: ${inputElement.value}`); // Output: Input value: Hello, TypeScript!




