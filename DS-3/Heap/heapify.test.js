
let heapify = (arr, n, i) => {

    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < largest && arr[left] < arr[largest]) largest = left
    if (right < largest && arr[right] < arr[largest]) largest = right

    if (largest !== i) {
        let temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;
        heapify(arr, n, largest);
    }


}



let arrToHeap = (arr) => {

    let n = arr.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        heapify(arr, n, i)
    }

    return arr
}


let arr = [1, 22, 13, 12, 101]

console.log(arrToHeap(arr))



/**
 * *--------------------Heap Sort-----------------------*
 */

function heapSort(arr) {
    // Build max heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }

    // Heap sort
    for (let i = arr.length - 1; i > 0; i--) {
        // Swap root element with last element
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Heapify the reduced heap
        heapify(arr, 0, i);
    }

    return arr;
}

function heapify(arr, parent, index) {
    let left = 2 * parent + 1; // Left child
    let right = 2 * parent + 2; // Right child
    let largest = parent; // Initialize largest as root

    // If left child is larger than root
    if (left < index && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < index && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== parent) {
        // Swap root with largest
        let temp = arr[parent];
        arr[parent] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected sub-tree
        heapify(arr, largest, index);
    }
}

// let arr = [5, 9, 1, 3, 4, 6, 8, 2, 7];
let sortedArr = heapSort(arr);
console.log(sortedArr);



