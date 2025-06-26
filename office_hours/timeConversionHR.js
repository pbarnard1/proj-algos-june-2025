// Time Conversion challenge from HackerRank: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
function timeConversion(s) {
    // Write your code here
    let militaryTimeStr = "";
    if (s.endsWith("AM")) { // AM
        if (s.startsWith("12")) {
            militaryTimeStr += "00";
        } else {
            militaryTimeStr += s.slice(0,2); // Grab the hour
        }
    } else { // PM
        if (s.startsWith("12")) {
            militaryTimeStr += "12";
        } else {
            militaryTimeStr += parseInt(s.slice(0,2),10) + 12; // Grab the hour and add 12
        }
    }
    militaryTimeStr += s.slice(2,8); // Add minutes and seconds along with colons ":"
    return militaryTimeStr;
}