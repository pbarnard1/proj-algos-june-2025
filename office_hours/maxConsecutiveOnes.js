// Max Consecutive Ones challenge from LeetCode: https://leetcode.com/problems/max-consecutive-ones/
var findMaxConsecutiveOnes = function(nums) {
    // O(n) time with a single loop and O(1) space (no additional arrays)
    let maxStreak = 0;
    let currentStreak = 0;
    for (let digit of nums) {
        if (digit === 1) {
            currentStreak++;
        } else {
            currentStreak = 0;
        }
        maxStreak = Math.max(maxStreak,currentStreak);
    }
    return maxStreak;
};