let s = "dfa13221afd"

function secondHighest(s) {
  const strArr = s
    .split("")
    .map((el) => +el)
    .filter((el) => !isNaN(el));
  let max=-1;
  let secMax=-1;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] > max) {
      secMax = max
      max=strArr[i]
    }
  }
  return secMax;
}

console.log(secondHighest(s));
