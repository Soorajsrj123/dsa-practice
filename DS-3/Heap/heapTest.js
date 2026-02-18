class MinHeap {
    constructor() {
        this.heap = [];
    }

    getSize() {
        return this.heap.length;
    }

    getParent(index) {
        return Math.floor((index - 1) / 2)
    }

    getleft(index) {
        return 2 * index + 1
    }

    getRight(index) {
        return 2 * index + 2
    }

    swap(i1, i2) {
        [[this.heap[i1], this.heap[i2]] = [this.heap[i2].this.heap[i1]]]
    }

    heapifyUp(index) {
        if (index == 0) return

        const parentIndex = this.getParent(index)
        if (this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex)
            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(index = 0) {

        const leftIndex = this.getleft(index)
        const rightIndex = this.getRight(index)
        let smallestIndex = index;

    }

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
