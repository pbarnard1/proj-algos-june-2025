// Number of Recent Calls challenge: https://leetcode.com/problems/number-of-recent-calls/

// Alternate way to define a class (there's more to it than that)
var RecentCounter = function() {
    this.allRequests = []; // "Queue" as an array
};

// Docstring below in lines 10-13

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.allRequests.push(t); // Adds the new time
    // Remove the oldest time that's more than 3000 milliseconds away from the most recent ping (WARNING: O(n) time, which violates the queue data structure, in that it should take up O(1) time)
    while (this.allRequests.length > 0 && this.allRequests[0] < t - 3000) {
        this.allRequests.shift(); 
    }
    // console.log(this.allRequests);
    return this.allRequests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */