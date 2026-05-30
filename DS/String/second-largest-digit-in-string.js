let s='dfa12321afd'
var secondHighest = function (s) {
     let max = -1;
  let secMax = -1;

    for (const ch of s) {
    //   converting string character to number
    const num = Number(ch);

    if (isNaN(num)) continue;

    if (num > max) {
      secMax = max;
      max = num;
    } else if (num > secMax && num !== max) {
      secMax = num;
    }
  }

  return secMax;
};

console.log(secondHighest(s))