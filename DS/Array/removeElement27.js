// Q)27 remove elements


var removeElement = function (nums, val) {
  // initializing i with 0 
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    // if j found a different value than val so assign it to i th position 
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  // returnig i which means i is the number of remaining element
  return i
};
console.log(
removeElement([1, 2, 3, 2], 2)
)