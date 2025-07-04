// Find the index where a given value is found in a given array that's sorted, or return -1 if we can't find the value.
// NOTE: We are assuming there are no duplicates for simplicity's sake.  (You'd need two binary search runthroughs to find
// the first and last instances of a given value.)
// In big O time, it's O(log N) time.
// For the record, this is just ONE implementation of binary search; real-life problems involve different
// variants of the binary search algorithm.
const binarySearch = (arr, val) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) { // As long as have at least one index to consider (no crossing over)
        let midIndex = Math.floor((leftIndex+rightIndex)/2);
        if (val < arr[midIndex]) { // Desired value (input "val") is smaller than the value at the midpoint index
            rightIndex = midIndex - 1;
        } else if (val > arr[midIndex]) { // Value is bigger than the value at the midpoint index
            leftIndex = midIndex + 1;
        } else { // Value is equal to that at the midpoint, so we're done
            return midIndex;
        }
    }
    return -1; // We don't find the value
}

let x = [1, 3, 8, 12, 15, 22, 25];
console.log(binarySearch(x,3)); // 1
console.log(binarySearch(x,1)); // 0
console.log(binarySearch(x,25)); // 6
console.log(binarySearch(x,0)); // -1 
console.log(binarySearch(x,17)); // -1
console.log(binarySearch(x,30)); // -1