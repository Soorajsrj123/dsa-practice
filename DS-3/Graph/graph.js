class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            //Creating new set in the adjList
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            // Checking if the value already exists or not
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        // adding Value to the Set
        
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }

    depthFirst(start) {
        const result = [];
        const visited = {};
        const stack = [start];
        let vertex;

        visited[start] = true;

        while (stack.length) {
            vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(node => {
                if (!visited[node]) {
                    visited[node] = true;
                    stack.push(node)
                }
            });
        }

        return result;

    }

    breadthFirst(start) {
        const result = [];
        const visited = {};
        const queue = [start];
        let vertex;

        visited[start] = true;
        while (queue.length) {

            vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(node => {    
                if (!visited[node]) {
                    visited[node] = true;
                    queue.push(node);
                }
            });

        }
        return result
    }

}

const graph = new Graph();
graph.addVertex("A");
graph.display();

// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "C");
// graph.display();
// graph.removeEdge("A", "B");
// graph.display();
// graph.removeVertex("A");
// graph.display();