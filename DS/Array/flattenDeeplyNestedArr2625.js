
// Q)2625

var flat = function (arr, n) {
     //declaring a variable for storing flatted resultes
     let result = []
     // itrating through each element in the array
     for (const value of arr) {
     //   cheking if the value is array or not and depthLimit > 0 if both true call the same fn recursivly to flat array
         if (Array.isArray(value) && n > 0) {
              let data = flat(value, n - 1)
              console.log(data, '------------')
          //  function returned result is an array so we need to add the each elemnt to the original result array
              for (const val of data) {
                  result.push(val)
              }
         } else {
           console.log('else worked')
              result.push(value)
        }
     }
     return result
}