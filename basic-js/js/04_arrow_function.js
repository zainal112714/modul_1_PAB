console.log("------ Arrow Function ------");

// normal function
function hello() {
    return "Hello World";
}

// Normal Function
hello = function() {
    return "Hello World";
}

console.log(hello());

// Arrow Function
hello = () => {
    return "Hello World! This is from Arrow Function";
}

// Arrow Function
hello = () => "Hello World! This is from Arrow Function";

console.log(hello());

// Arrow Function with 1 Parameter
hello = (myName) => "hello" + myName + "! this is from Arrow Function";

console.log(hello("Zainal"));