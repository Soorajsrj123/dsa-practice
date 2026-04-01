
const nums = [2, 5, 1, 3, 4, 7]
const n = nums.length/2
const result=[]
for (let i = 0; i < nums.length; i++){
    if (i < n) {
        result[i*2]=nums[i]
    } else {
        result[(i-n)*2+1]=nums[i]
    }
}

console.log(result)