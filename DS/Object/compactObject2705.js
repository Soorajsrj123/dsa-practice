
// Q)  2705

var compactObject = function(obj) {
     let result
    // Base case
    if (typeof obj !== 'object' || obj === null) {
       console.log('Primitive block hit')
       // so the value is primitive stops recursion
       return obj
    } else if (Array.isArray(obj)) {
        console.log('Arry created')
        result = []
    } else {
        console.log('object created')
       result={}
    }
    for (const key in obj) {
        let recursVal = compactObject(obj[key])
        if (Boolean(obj[key])) {
            if (Array.isArray(obj)) {
                result.push(recursVal)
            } else {
                result[key]=recursVal
            }
        }
    }
  return result
};


let arr = [null, 0, false, 1]
// let arr = {
//     name: 'sooraj', age: {
//         dob: '12-10-2000',
//         ex:[1,null]
// }}


console.log(compactObject(arr))