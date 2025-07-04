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
// console.log(rMin(myArr));

// If you want a challenge and want to solve this WITHOUT recursion, use a queue (data structure) to help you.

const fibonacciNoMemo = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciNoMemo(n-2) + fibonacciNoMemo(n-1);
    }
}

// console.time("label") and console.timeEnd("label") is one way to time code out
// There are better ways to time your code
// THIS IS TOO SLOW!!!
// for (let k = 0; k < 45; k++) {
//     console.time("timer");
//     console.log(fibonacciNoMemo(k));
//     console.timeEnd("timer");
// }

// Now use a memo (in this case, an object) to speed this problem up; save already calculated values in this memo
// so we don't need to compute them again
const fibonacciWithMemo = (n, savedCalculations = {}) => {
    if (n <= 1) {
        savedCalculations[n] = n;
        return n;
    } else {
        // Check and see if we've calculated these values - if not, do recursion, and if we did, no recursion needed
        if (!savedCalculations.hasOwnProperty(n-2)) {
            savedCalculations[n-2] = fibonacciWithMemo(n-2, savedCalculations);
        }
        if (!savedCalculations.hasOwnProperty(n-1)) {
            savedCalculations[n-1] = fibonacciWithMemo(n-1, savedCalculations);
        }
        savedCalculations[n] = savedCalculations[n-2] + savedCalculations[n-1];
        return savedCalculations[n];
    }
}

// This is MUCH faster!
// for (let k = 0; k < 150; k++) {
//     console.time("timer");
//     console.log(fibonacciWithMemo(k));
//     console.timeEnd("timer");
// }

/* Climbing Stairs challenge (from Recursion To Do 5)
Speros walks the stairs at the Dojo multiple times every day. 
Often he takes 2 stairs at a time, to work his quadriceps; 
he’s just that way. Other days he mixes it up: with every footstep, 
he randomly chooses to take 1 stair or 2. You are given an integer 
representing the total number of stairs. Determine all ways to walk 
the stairs. Given 4, return [[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]]. 
Solve recursively with no loops. 
And don’t forget to get yourself some exercise during the bootcamp, as well.
*/
const climbStairs = n => {
    let allPossibilities = [];
    const rClimbStairs = (stepsRemaining, stepsSoFar = []) => {
        if (stepsRemaining === 0) {
            allPossibilities.push(stepsSoFar);
        } else if (stepsRemaining === 1) {
            rClimbStairs(stepsRemaining-1, [...stepsSoFar, 1]);
        } else {
            rClimbStairs(stepsRemaining-1, [...stepsSoFar, 1]); // Climb one step
            rClimbStairs(stepsRemaining-2, [...stepsSoFar, 2]); // Climb two steps
        }
    }
    rClimbStairs(8); // Start the recursion off
    return allPossibilities;
}

console.log(climbStairs(5));