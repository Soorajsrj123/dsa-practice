


// Q) 561 Array Partition



var arrayPairSum = function (nums) {
    // sorting the array for getting best pairs 
     let sortedArr = nums.sort((a, b) => a - b)
    let sum = 0
    //  making i=i+2 because we only need 0,2,4.... elements
    for (let i = 0; i < sortedArr.length; i = i + 2) {
        // we know that after sorting each pair first value should be the small element
           sum+=sortedArr[i]
    }
    return sum
};