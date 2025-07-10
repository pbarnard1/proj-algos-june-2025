// Buddy Strings challenge from LeetCode: https://leetcode.com/problems/buddy-strings/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) { // Edge case: the two strings are not of equal length
        return false;
    }
    let differenceCounter = 0; // How many times the letters are different at each index
    let hasDuplicates = false; // Whether a letter is duplicated in a string (important if the strings are the same)
    const sFreq = {}, goalFreq = {};
    for (let k = 0; k < s.length; k++) {
        const sChar = s[k], goalChar = goal[k];
        if (sChar !== goalChar) {
            differenceCounter++;
        }
        // Count how many times each letter appears in both strings
        if (sChar in sFreq) {
            sFreq[sChar]++;
            hasDuplicates = true;
        } else {
            sFreq[sChar] = 1;
        }
        if (goalChar in goalFreq) {
            goalFreq[goalChar]++;
            hasDuplicates = true;
        } else {
            goalFreq[goalChar] = 1;
        }
    }
    // Verify that the same letters appear in both strings AND appear at the same frequencies
    for (let sLetter in sFreq) {
        if (!(sLetter in goalFreq) || (sFreq[sLetter] !== goalFreq[sLetter])) {
            return false;
        }
    }
    // console.log(sFreq);
    // console.log(goalFreq);
    if (differenceCounter === 2) { // One single swap is possible
        return true;
    } else if (differenceCounter === 1 || differenceCounter >= 3) { // Impossible to get one string from the other
        return false;
    } else { // All letters same, so see if we have any duplicate letters, if so, a swap is doable, otherwise it's not
        return hasDuplicates;
    }
};