let heapify = (arr,n,i) => {

    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < n && arr[left] < arr[largest]) largest = left

    if (right < n && arr[right] < arr[largest]) largest = right

    if (largest !== i) {

        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp

        heapify(arr, n, largest)
    }

}


let arrToHeap = (arr) => {

    let n = arr.length

    for (let i = Math.floor(n / 2); i >= 0; i--) {

        heapify(arr, n, i);
    }

    return arr;

}

// let arr = [1, 22, 10, 20, 5]
let arr=[10,4,3,66]
console.log(arrToHeap(arr))
// arr.push(2)
// console.log(arrToHeap(arr))
