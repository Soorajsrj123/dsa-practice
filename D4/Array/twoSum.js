

// O(n^2)time complexity O(1) space complexity
let arr=[6,5,4,3,9,8,0]

// function findElements(arr, targetValue) {
//      for (let i = 0; i < arr.length -1; i++){
//           for (let j = i+1; j < arr.length; j++) {
//           if (arr[i] + arr[j] === targetValue) {
//                  return `array index are ${i} and ${j}`
//             }
//           }
//      }
//      return false
// }

// O(n) Timecomplexity O(1) Space complexity using Heap

function findElements(arr, targetValue) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = targetValue - arr[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(arr[i], i);
    }

    return false;
}
console.log(findElements(arr,10))