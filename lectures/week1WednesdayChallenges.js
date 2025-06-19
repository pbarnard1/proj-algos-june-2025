function combineArrays(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    return newArr;
}

const combineArrays2 = (arr1, arr2) => {
    let newArr = [];
    for (let k = 0; k < arr1.length; k++) {
        newArr.push(arr1[k]);
    }
    for (let k = 0; k < arr2.length; k++) {
        newArr.push(arr2[k]);
    }
    return newArr;
}

// Test cases (using either function - same result)
console.log(combineArrays([],[3,4]));
console.log(combineArrays([1,8,2],[-3,4]));
console.log(combineArrays2([true,false],["blue","green", 20]));
let myArr1 = [3, 10, 2];
let myArr2 = [5, -3, "yellow"];
let myArr3 = combineArrays2(myArr1, myArr2);
console.log(myArr3);

const isPalindrome = inputStr => { // What we came up with together
    let isValid = false;
    let leftIndex = 0;
    for (let rightIndex = inputStr.length - 1; leftIndex < rightIndex; rightIndex--) {
        if (inputStr[rightIndex] === inputStr[leftIndex]) {
            isValid = true;
        } else {
            return false;
        }
        leftIndex++;
    }
    return isValid;
}

const isPalindrome2 = inputStr => { // Adrian's solution
    let leftIndex = 0, rightIndex = inputStr.length - 1;
    while (leftIndex < rightIndex) {
        if (inputStr[leftIndex] !== inputStr[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}

console.log(isPalindrome("mom")); // true
console.log(isPalindrome("abbA")); // false
console.log(isPalindrome2("torrent")); // false
console.log(isPalindrome2("deleted")); // false
console.log(isPalindrome2("dollod")); // false