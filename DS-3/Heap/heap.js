class MinHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    heapifyUp(index) {
        if (index === 0) return;

        const parentIndex = this.getParentIndex(index);
        if (this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            this.heapifyUp(parentIndex);
        }
    }

    heapifyDown(index = 0) {
        const leftIndex = this.getLeftChildIndex(index);
        const rightIndex = this.getRightChildIndex(index);
        let smallestIndex = index;

        if (leftIndex < this.size && this.heap[leftIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftIndex;
        }

        if (rightIndex < this.size && this.heap[rightIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightIndex;
        }

        if (smallestIndex !== index) {
            this.swap(index, smallestIndex);
            this.heapifyDown(smallestIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.size - 1);
    }

    remove() {
        if (this.size === 0) return null;

        if (this.size === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return root;
    }
}



const heap = new MinHeap();

heap.insert(5);
heap.insert(10);
heap.insert(3);
heap.insert(8);

console.log(heap.remove()); // 3
console.log(heap.remove()); // 5
console.log(heap.remove()); // 8
console.log(heap.remove()); // 10
console.log(heap.remove()); // null



