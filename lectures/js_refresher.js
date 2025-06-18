let x = 10; // Define a variable
let myArr = [20, 15, "hello", true]; // Array
let myObj = { // Object: "key": value pairs
    "name": "Adrian",
    "color": "yellow",
    "state": "Washington",
    "age": 30
}

// Define functions
function sayHi(name) {
    return "Hello, " + name + "!";
}

const sayHello = name => {
    return "Hello, " + name + "!";
}

const sayHello2 = name => "Hello, " + name + "!";

console.log(sayHi("Kim"));
console.log(sayHello("Alan"));
console.log(sayHello2("John"));

let randomName = "Jane";
let greeting = sayHello(randomName);

let currentTemp = 75;
if (currentTemp >= 90) { // && = and, || = or
    console.log("Too hot!");
} else if (currentTemp >= 80) {
    console.log("Getting a bit warm...");
} else if (currentTemp >= 70) {
    console.log("Perfect weather!")
} else if (currentTemp >= 60) {
    console.log("A little cool, but pleasant")
} else {
    console.log("Too cold!");
}

let arr1 = [1, 3, 2, 10, 4];
let maxVal = arr1[0];
for (let k = 1; k < arr1.length; k++) {
    if (arr1[k] > maxVal) { // Check to see whether the current value in the array is bigger than the maximum found so far
        maxVal = arr1[k];
    }
}
console.log(maxVal);

let val = 1;
while (val <= 2000) {
    val *= 2
    console.log(val);
}