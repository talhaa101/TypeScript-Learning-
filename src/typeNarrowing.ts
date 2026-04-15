function getChai (kind : string | number | boolean) : string {
    if (typeof kind === "string") {
        return `You ordered a ${kind} chai.`;
    } else if (typeof kind === "number") {
        return `You ordered ${kind} cups of chai.`;
    } else if (typeof kind === "boolean") {
        return kind ? "You ordered a chai." : "You did not order a chai.";
    } else {
        return "Invalid order.";
    }
}

console.log(getChai("masala")); // Output: You ordered a masala chai.
console.log(getChai(3)); // Output: You ordered 3 cups of chai.     
console.log(getChai(true)); // Output: You ordered a chai.
console.log(getChai(false)); // Output: You did not order a chai.



class kulhadChai {  
    serve() {   
        return "Serving chai in a kulhad.";
    }   
}

class cutting {
    serve() {
        return "Serving chai in a cutting.";
    }
}

function serveChai(chai: kulhadChai | cutting): string {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    } else if (chai instanceof cutting) {
        return chai.serve();
    } else {
        return "Unknown chai type.";
    }   
}
const kulhad = new kulhadChai();
const cuttingChai = new cutting();  

console.log(serveChai(kulhad)); // Output: Serving chai in a kulhad.
console.log(serveChai(cuttingChai)); // Output: Serving chai in a cutting.

type ChaiOrder = {  
    type: "kulhad" | "cutting";
    quantity: number;
}   

function processChaiOrder(order: ChaiOrder): string {       
    if (order.type === "kulhad") {
        return `Processing order for ${order.quantity} kulhad chai.`;
    } else if (order.type === "cutting") {
        return `Processing order for ${order.quantity} cutting chai.`;
    } else {
        return "Unknown chai type.";
    }   
}

const order1: ChaiOrder = { type: "kulhad", quantity: 2 };
const order2: ChaiOrder = { type: "cutting", quantity: 3 };

console.log(processChaiOrder(order1)); // Output: Processing order for 2 kulhad chai.
console.log(processChaiOrder(order2)); // Output: Processing order for 3 cutting chai.






