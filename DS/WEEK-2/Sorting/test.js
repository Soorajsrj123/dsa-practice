// // let arr=[5,3,4,9,1,13,21]

// // function BubleSort(arr)
// // {
// //         let temp;
// //     for (let i = 0; i < arr.length; i++) {
// //         let istrue=false
// //         for (let j = 0; j < arr.length; j++) {
// //             if(arr[j]>arr[j+1])
// //             {
// //                 temp=arr[j]
// //                 arr[j]=arr[j+1]
// //                 arr[j+1]=temp
// //                 istrue=true
// //             }
           
// //         }
// //         if(!istrue)
// //         {
// //             break;
// //         }
// //     }
// //     return arr
// // }

// // console.log(BubleSort(arr));

// // let arr=[4,9,4,3,1]
// // let min,i,j
// // function Selectionsort(arr)
// // {

// //     for ( i = 0; i < arr.length; i++) {

// //         min=i
// //         for ( j = 0; j < arr.length; j++) {
            

            
// //         }
// //     }

// // }



// let arr=[5,3,9,2,1]

// // function BubleSort(arr)
// // {
// //     for (let i = 0; i < arr.length; i++) {
        
// //         for (let j = 0; j < arr.length; j++) {
            
// //             if(arr[j]>arr[j+1])
// //             {
// //                 let temp
// //                 temp=arr[j]
// //                 arr[j]=arr[j+1]
// //                 arr[j+1]=temp
// //             }
// //         }
// //     }
// //     return arr
// // }

// // console.log(BubleSort(arr));

// function SelectionSort(arr)

// {

//     let min,i,j,temp
//     for (i = 0; i < arr.length; i++) {
        
//         min=i
//         for ( j= i+1; j< arr.length; j++) {
          
//             if(arr[j]<arr[min])
//             {
//                 min=j
//             }
//         }
//         temp=arr[i]
//         arr[i]=arr[min]
//         arr[min]=temp
//     }
//     return arr
// }

// console.log(SelectionSort(arr));




let arr=[3,5,1,3,1]

function SelectionSort(arr)
{
    let Temp;
    for (let i = 0; i < arr.length; i++) {
          min=i
          for (let j =i+1; j <arr.length; j++ ){

            if(arr[j]<arr[min])
            {
                min=j
            }
                          
          }

          Temp=arr[i]
          arr[i]=arr[min]
          arr[min]=Temp
        
    }
    return arr
}

// console.log(SelectionSort(arr));



function Quicksort(arr,lb,ub){

  if(lb<ub)
  {
    let p=partition(arr,lb,ub)
    Quicksort(arr,lb,p-1)
    Quicksort(arr,p+1,ub)
    
  }
  return arr

}

function partition(arr,lb,ub)
{
  let pivot=arr[lb]
  let start=lb
 let end=ub
 while(start<end){
  while(arr[start]<=pivot)
  {
    start++
  }
  while(arr[end]>pivot)
  {
    end--
  }
  if(start<end)
  {
    [arr[end],arr[start]]=[arr[start],arr[end]]
  }

 }
 [arr[end],arr[lb]]=[arr[lb],arr[end]]
 return end
}

let arrr=[7,1,9,7,3,1]
let lb=0
let ub=arrr.length-1
console.log(Quicksort(arrr,lb,ub));