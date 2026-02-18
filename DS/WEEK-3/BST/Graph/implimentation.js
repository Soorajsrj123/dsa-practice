
class Graph{
    constructor()
    {
        this.adjacencyList={}
    }

    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
              //Creating new set in the adjList
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2)
    {
        if(!this.adjacencyList[vertex1])
        {
            this.adjacencyList[vertex1]=new Set()
        }
        if(!this.adjacencyList[vertex2])
        {
            this.adjacencyList[vertex2]=new Set()
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdges(vertex1,vertex2)
    {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)

    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex])
        {
            return 
        }
        for(let adjacentVertex of this.adjacencyList[vertex])
        {
            this.removeEdges(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    
    display()
    {
        for(let vertex in this.adjacencyList)
        {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);        }
    }
    hasEdge(vertex1,vertex2)
    {
    
       return this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1)
    }

     BreadthFist(start)
     {
          let visited={}
           let result=[]
           let queue=[start]
           let vertex

           visited[start]=true
        while(queue.length)
        {    
            vertex=queue.shift()

            result.push(vertex)
            this.adjacencyList[vertex].forEach(node => {
                if(!visited[node])
                {
                    visited[node]=true
                        queue.push(node)
                }
                
            });
        }
        return result
     }

   DepthFirst(start)
   {
    let result=[]
    let visited={}
    let stack=[start]
    let vertex

       visited[start]=true
       while(stack.length)
       {
        vertex=stack.pop()
        result.push(vertex)

        this.adjacencyList[vertex].forEach(node => {
        if(!visited[node])
        {
            visited[node]=true
            stack.push(node)
        }
        });
       }
       return result
   }
   
}

let graph=new Graph()
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addEdges(1,2)
graph.addEdges(2,3)
graph.addEdges(3,4)
graph.display()
console.log(graph.DepthFirst(2));

// // graph.removeVertex(1)
// console.log(graph.hasEdge(1,3));
// console.log("----");
// graph.display()

