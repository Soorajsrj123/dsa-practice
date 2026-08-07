
// Q)58 Length of Last word
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    
    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    
    let length = 0;
    // Count characters of the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))