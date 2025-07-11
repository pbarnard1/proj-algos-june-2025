// Find Pivot Index challenge from LeetCode: https://leetcode.com/problems/find-pivot-index/
var pivotIndex = function(nums) {
    // O(N) time - no NESTED loop AND O(1) space
    let rightSum = 0;
    for (let k = 0; k < nums.length; k++) {
        rightSum += nums[k];
    }
    let leftSum = 0;
    // Loop through each pivot index
    for (let k = 0; k < nums.length; k++) {
        rightSum -= nums[k];
        if (leftSum === rightSum) {
            return k;
        }
        leftSum += nums[k];
    }
    return -1;

    // O(N^2) time due to a nested loop, but uses O(1) space
    // // Outer loop for each possible pivot index
    // for (let k = 0; k < nums.length; k++) {
    //     // Inner loops to calculate the sums to the left and right of the possible pivot
    //     let leftSum = 0;
    //     for (let leftIndex = 0; leftIndex < k; leftIndex++) {
    //         leftSum += nums[leftIndex];
    //     }
    //     let rightSum = 0;
    //     for (let rightIndex = k + 1; rightIndex < nums.length; rightIndex++) {
    //         rightSum += nums[rightIndex];
    //     }
    //     if (leftSum === rightSum) {
    //         return k;
    //     }
    // }
    // return -1;
};