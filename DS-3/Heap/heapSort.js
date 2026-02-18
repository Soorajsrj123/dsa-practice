function heapsort(arr) {
    for (var i = Math.floor((arr.length / 2) - 1); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }

    for (var i = arr.length - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, 0, i);
    }

    return arr;
}

function heapify(arr, parent, index) {
    let left = 2 * parent + 1;
    let right = 2 * parent + 2;
    let largest = parent;

    if (left < index && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < index && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== parent) {
        let temp = arr[parent];
        arr[parent] = arr[largest];
        arr[largest] = temp;

        heapify(arr, largest, index);
    }

}

let arr = [5, 9, 1, 3, 4, 6, 8, 2, 7]
let sortedArr = heapsort(arr);
console.log(arr);