


// Q)169  Majority Element 

// Boyer-Moore Voting Algorithm

var majorityElement = function(nums) {
    let candidate = null
    let count = 0
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num
            count=1
        } else if (num === candidate) {
            count++
        } else {
            count--
        }
    }
    return candidate

};







// var majorityElement = function (nums) {
//     let myMap = new Map()
//     for (const element of nums) {
//         if (!myMap.has(element)) {
//             myMap.set(element,1)
//         } else {
//             let data = myMap.get(element)
//             myMap.set(element,data+1)
//         }
//     }
//     for (const [key,value] of myMap) {
//         if (value>Math.floor(nums.length/2)) {
//             return key
//         }
//     }

// };


console.log(majorityElement([2,1,1,1,2]))