
let nums=[1,2,3,4]

let n=nums.length

var getConcatenation=function(nums){
     let ans=[]

     ans=[...nums,...nums]
     console.log(ans)
}

getConcatenation(nums)