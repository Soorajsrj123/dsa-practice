
// Q)13 ROMAN TO INTEGER




var romanToInt = function (s) {
    let lookUpTable = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        1:1000
    }
    // for calculating the total value
    let total = 0
    // for holding the latest highest value 
    let prevMax=0
    for (let i = s.length - 1; i >= 0; i--) {
    //subtraction condition
       if (lookUpTable[s[i]] < prevMax) {
            total=total-lookUpTable[s[i]]
       } else {
           //    addition condition
            
           total = lookUpTable[s[i]] + total
           prevMax=lookUpTable[s[i]]
        }
    }
    return total
};
console.log(romanToInt('IIII'))