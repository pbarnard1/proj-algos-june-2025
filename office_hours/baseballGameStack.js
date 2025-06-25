/** Baseball Game challenge on LeetCode that uses a stack (array): https://leetcode.com/problems/baseball-game/
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scoreStack = []; // Array that operates like a stack (the data structure)
    for (const op of operations) {
        if (!isNaN(parseInt(op))) { // If it's an integer, we do NOT get NaN
            scoreStack.push(parseInt(op));
        } else if (op === "+") {
            let sum = scoreStack[scoreStack.length - 1] + scoreStack[scoreStack.length - 2];
            scoreStack.push(sum);
        } else if (op === "D") {
            scoreStack.push(scoreStack[scoreStack.length - 1] * 2);
        } else { // "C"
            scoreStack.pop();
        }
    }
    // console.log(scoreStack);
    const sumCallback = (acc,currentVal) => {
        return acc + currentVal;
    }
    let sum = scoreStack.reduce(sumCallback, 0);
    return sum;
};