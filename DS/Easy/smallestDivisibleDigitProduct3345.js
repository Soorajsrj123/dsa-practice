// Q)3345 smallestDivisibleDigitProduct 1





var smallestNumber = function(n, t) {
    // Every product is divisible by 1
      if(t===1){
          return n
      }
      
      function digitProduct(num){
        // any value * 0 is zero so returning 0 without any condition check
           if (num === 0) return 0;
          let product = 1;
          
            while (num > 0) {
                product *= num%10;         // multiply into running product
                num = Math.floor(num / 10); // it is for remove last digit eg:1234 it gives 123
            }

            return product;
            }
            
            for(let i=n;;i++){
                if(digitProduct(i)%t===0){
                    return i
                }
            }
};


smallestNumber(10, 2)  //ans 10 because product of digits 1*0 is 0 and 0 is divisible by t(2)
smallestNumber(15,3)  //ans 16 because product of digits 1*6 is 6 and 6 is divisible by t(3)