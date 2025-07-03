function countdown(x) {
    for (let k = x; k > 0; k--) {
        console.log(k);
    }
    console.log("Liftoff!");
}

// countdown(20);

const rCountdown = x => {
    // Base case: stopping point for your recursion - in this case, when we hit 0
    if (x <= 0) { 
        console.log("Liftoff!");
    } else {
        console.log(x);
        rCountdown(x-1); // Recursive step (where we make forward progress)
    }
}

// rCountdown(5);

// Factorial: n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1 = 120 = 5 * 4!
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6
// 2! = 2 * 1 = 2
// 1! = 1
// By definition, 0! = 1

const factorial = n => {
    let product = 1;
    console.log("Starting with 1");
    for (let k = 1; k <= n; k++) {
        product *= k;
        console.log(`Multiplying by ${k} to get...`);
        console.log(product);
    }
    return product;
}
// factorial(10);

const rFactorial = (n) => {
    if (n <= 1) { // Base case
        return 1;
    } else {
        // Recursive case
        return n * rFactorial(n-1);
    }
}
// console.log(rFactorial(5));

// Find the minimum value of an array with nested arrays (subarrays)
let myArr = [[3,8],10,[[[]]],[2,[-3],[5,1,[2]]]];
// for (let k = 0; k < myArr.length; k++) {
//     console.log(myArr[k]);
// }

const rMin = (item, minVal = Number.MAX_VALUE) => {
    if (Array.isArray(item)) { // We have an array
        for (const val of item) { // Loop through array
            minVal = rMin(val, minVal);
        }
    } else { // We have a value instead ONLY - no nested array
        minVal = Math.min(item,minVal);
    }
    return minVal;
}

// Array.isArray(item); return true if item is an array and false otherwise
console.log(rMin(myArr));

// If you want a challenge and want to solve this WITHOUT recursion, use a queue (data structure) to help you.