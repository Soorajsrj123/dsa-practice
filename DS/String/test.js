// let str="Hello?yes?mm"
// let tt='sooraj'



// ToLower Case
// console.log(str.toLocaleLowerCase());

// CONCATENATION
// console.log(str.concat(tt));
// console.log(str.split('?'))


// STRING REVERSE


// let rev=""
// for(let i=tt.length-1;i>=0;i--)
// {
//     // console.log(tt[i]);
//     rev+=tt[i]

// }
// console.log(rev)


// UNIQUE STRING OR NOT

// function unique(tt)
// {
//     for(let i=0;i<tt.length-1;i++)
//     {
//         for(let j=i+1;j<tt.length;j++)
//         {
//             if(tt[i]==tt[j])
//             {
//                 console.log("array has unique values");
//                 console.log(tt[i],tt[j]);
//                 return false
//             }
//         }
//     }
//     return true
    
// }

// console.log(unique(tt));

// let str="hey my name is sooraj"

// let arr=Array.from(str)
// let repeat="  ".repeat(1)
// console.log(repeat);
// console.log(arr);

// let b=str.split()
// console.log(b[0]);

// console.log(str.charAt(2));


// let strs = ["flower","flow","flight"]
// console.log(strs[0][1]);
// var longestCommonPrefix = function(strs) {
//     for (var i = 0; i < strs[0].length; i++) 
//     {

//         var tmpChar = strs[0][i]; 
      
//         for (var j = 0; j < strs.length; j++) 
//         {
//             if (strs[j].length == i || strs[j][i] != tmpChar) 
//             {
//                 return strs[0].substring(0, i);
//             }
//         }
//     }
//     return strs[0]; 
// };

// // console.log( longestCommonPrefix(strs));

let str = "my name is saifu, hai how are you?"


function stringCapitalize(str){
    let wordArray = str.split(" ")
    console.log(wordArray);
    let string = wordArray.map(elem =>{
        var fLetter = elem.charAt(0).toUpperCase()
        console.log(fLetter,"hh");
        var ltrArray = elem.split("")
        ltrArray[0] = fLetter
        return ltrArray.join("")
    })
    return string.join(" ") 
}

console.log(stringCapitalize(str));