
// Q)486

var PredictTheWinner = function (nums) {

    function play(left, right) {

        // Only one number left
        if (left === right) {
            return nums[left];
        }

        // Take the left number
        let leftChoice = nums[left] - play(left + 1, right);
         console.log({leftChoice})
        // Take the right number
        let rightChoice = nums[right] - play(left, right - 1);
      console.log({rightChoice})
        // Choose the better option
        return Math.max(leftChoice, rightChoice);
    }

    return play(0, nums.length - 1) >= 0;
};

nums = [2, 8,3]

console.log(PredictTheWinner(nums))