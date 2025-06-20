/*
Most Common Word challenge from Week 1 Thursday office hour (FIXED):
https://leetcode.com/problems/most-common-word/description/
*/
var mostCommonWord = function(paragraph, banned) {
    let lowerCaseStr = paragraph.toLowerCase(); // convert to lower case
    let lowerCaseNoPunctuationStr = "";
    let punctuationSet = new Set("!?',;.");
    // (Slightly fixed comment) Loop that replaces punctuation marks with spaces and leave all other characters alone
    for (let k = 0; k < lowerCaseStr.length; k++) {
        const curChar = lowerCaseStr[k];
        // FIXED: If we have a punctuation mark, replace with a space to ensure words remain separated, like in the case "a, a, a, a, b,b,b,c, c"
        if (punctuationSet.has(curChar)) { // A punctuation mark
            lowerCaseNoPunctuationStr += " ";
        } else { // A letter or space, so add as is
            lowerCaseNoPunctuationStr += curChar; 
        }
    }
    // Split the remaining string into its constituent words and (FIXED) filtered
    // so that strings of one character or more remain
    const wordArr = lowerCaseNoPunctuationStr.split(" ").filter(word => word.length > 0);
    // Map to save how many times each non-banned word appears
    // Key = word, value = frequency
    let wordFreqMap = new Map();
    let bannedWordSet = new Set(banned);
    // Loop through each word
    for (let word of wordArr) {
        // Increment the word's frequency - or set it to one, provided the word is NOT banned
        if (bannedWordSet.has(word)) { // If the word is banned, forget it and move on
            continue;
        }
        if (wordFreqMap.has(word)) {
            wordFreqMap.set(word,wordFreqMap.get(word)+1); // Add one to frequency if word is already found
        } else {
            wordFreqMap.set(word,1); // New word, so set its frequency to 1 to start
        }
    }
    // Find most frequent word
    let freqWord = "";
    let highestFreq = 0;
    wordFreqMap.forEach((freq, word, map) => { // Anonymous callback function to find most common word
        if (freq > highestFreq) {
            freqWord = word;
            highestFreq = freq;
        }
    })
    return freqWord;
};