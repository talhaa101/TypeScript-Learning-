let sub: number | string = "1M"; // A variable that can hold either a number or a string (union type)

let apiRequestStatus: "pending" | "success" | "error" = "pending"; // A variable that can only hold one of the specified string literals (union type)

apiRequestStatus = "success"; // Valid assignment
// apiRequestStatus = "failed"; // Invalid assignment, would cause a TypeScript error


let airLineSeat  : "aisle" | "window" | "middle" = "window"; // A variable that can only hold one of the specified string literals (union type)

airLineSeat = "aisle"; // Valid assignment
// airLineSeat = "front"; // Invalid assignment, would cause a TypeScript error


const orders = [100, 200, 300] ;


for (const order of orders) {   
    console.log(`Processing order: ${order}`);
}



function processValue(value: number | string): void { // A function that accepts a parameter that can be either a number or a string
    if (typeof value === "number") {
        console.log(`Processing number: ${value}`);
    } else {
        console.log(`Processing string: ${value}`);
    }   
}
processValue(42); // Output: Processing number: 42
processValue("Hello"); // Output: Processing string: Hello
