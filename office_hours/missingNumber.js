// Missing Number challenge that involves sorting: https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // DISCLAIMER: You MIGHT NOT be allowed to modify the input directly.
    // Workaround: use the spread operator or another means to make a hard copy
    nums.sort((a,b) => a - b) // Sort in ascending order (O(N log N) time)
    // Key: if after sorting the value at index k is NOT the same as its numerical index
    // Example: [0,1,2,3,4,5,7,8,9] have matching values at their indexes (e.g. value 0 at
    // index 0, value 1 at index 1, etc.) until index 6, which has a value of 7, so return
    // 6
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] !== k) {
            return k;
        }
    }
    return nums.length;
};