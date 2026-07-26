

/* Q)Given an integer array nums, find three numbers whose product is maximum and return the maximum product

Input: nums = [1,2,3]
Output: 6

 Input: nums = [-1,-2,-3]
 Output: -6
 */
// Time Complexity= O
var maximumProduct = function (nums) {
    // find the length of the function for accessing array index directly
    let n = nums.length
    // sorting the array ascenging order (small to large)
    let sortedArr = nums.sort((a, b) => a - b)
    // finding the largest 3 elements product
    let candidate1 = sortedArr[n - 1] * sortedArr[n - 2] * sortedArr[n - 3]
    // findting the product of 2 smallest value and last largest value 
    let candidate2 = sortedArr[0] * sortedArr[1] * sortedArr[n - 1]
    // finding the max value 
    return Math.max(candidate1,candidate2)
};

console.log(maximumProduct([-100,-98,-1,2,3,4]))