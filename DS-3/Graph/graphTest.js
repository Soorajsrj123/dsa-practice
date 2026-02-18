class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set();
        }
    }

    addEdge(v1, v2) {
        if (!this.adjList[v1]) {
            this.addVertex(v1)
        }

        if (!this.adjList[v2]) {
            this.addVertex(v2)
        }
    }

    removeEdge(v1, v2) {
        this.adjList[v1].delete(v2)
        this.adjList[v2].delete(v1)
    }


    removeVertex(v) {
        if (!this.adjList[vertex]) {
            return
        }

        for (let adjV of this.adjList[vertex]) {
            this.removeEdge(v, adjV)
        }

        delete this.adjList[v];
    }

    display() {
        for(let v in this.adjList){
            console.log(`${vetex} -> ${[...this.adjList[vertex]]}`)
        }
    }

}

