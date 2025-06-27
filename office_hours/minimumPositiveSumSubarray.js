/*
Minimum Positive Sum Subarray challenge: https://leetcode.com/problems/minimum-positive-sum-subarray/description/
O(N^2) time due to the nested for loops (outer one in line 7 and the inner one[s] in lines 10 and 18)
*/
var minimumSumSubarray = function(nums, l, r) {
    let minimumSum = Number.MAX_VALUE;
    for (let windowSize = l; windowSize <= r; windowSize++) {
        let currentSum = 0;
        // Initialize the sliding window
        for (let i = 0; i < windowSize; i++) {
            currentSum += nums[i];
        }
        // Only if this sum is positive can we check to see if this is the new minimum positive sum 
        if (currentSum > 0) {
            minimumSum = Math.min(minimumSum,currentSum);
        }
        // Slide the window itself
        for (let i = windowSize; i < nums.length; i++) {
            // Add the newest value to the window
            currentSum += nums[i];
            // Remove the oldest value from the window
            currentSum -= nums[i-windowSize];
            // Check the sum
            if (currentSum > 0) {
                minimumSum = Math.min(minimumSum,currentSum);
            }
        }
    }
    return minimumSum === Number.MAX_VALUE ? -1 : minimumSum;
};