/*
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.
*/

var maxProduct = function (nums) {
    let max = -Infinity;
     for (let i = 0; i < nums.length-1; i++) {
       
         for (let j = i+1; j < nums.length; j++) {
             let product = (nums[i] - 1) * (nums[j] - 1)
             if (product > max) {
                 max=product
             }
         }
    }
    return max

};
console.log(maxProduct([1,2,3,4]))




// Optimized version

var maxProductOptimized= function (nums) {
    
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let x of nums) {
        if (x > largest) {
            secondLargest = largest;
            largest = x;
        } else if (x > secondLargest) {
            secondLargest = x;
        }
    }

    return (largest - 1) * (secondLargest - 1);
};