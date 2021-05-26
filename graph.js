
class Graph {
  constructor() {
    this.adjacencyList = {};
    // key is the node, value is an array of edges for that node
  }

  addVertex(value) {
    this.adjacencyList[value] = [];
  }

  // this is an undirected graph
  addEdge(a, b) {
    this.adjacencyList[a].push(b);
    this.adjacencyList[b].push(a);
  }

  removeEdge(a, b) {
    let aEdges = this.adjacencyList[a];

    for (let i = 0; i < aEdges.length; i++) {
      if (aEdges[i] === b) {
        this.adjacencyList[a] = this.adjacencyList[a].slice(0, i).concat(this.adjacencyList[a].slice(i + 1));
        break;
      }
    }

    let bEdges = this.adjacencyList[b];
    for (let j = 0; j < bEdges.length; j++) {
      if (bEdges[j] === a) {
        this.adjacencyList[b] = this.adjacencyList[b].slice(0, j).concat(this.adjacencyList[b].slice(j + 1));
        break;
      }
    }
  }

  removeVertex(vertex) {
    let edges = this.adjacencyList[vertex];
    for (let i = 0; i < edges.length; i++) {
      this.removeEdge(vertex, edges[i]);
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(vertex) {
    let visited = {};
    let results = [];

    const innerFunc = (vertex) => {
      // Base Case: vertex is empty
      if (!vertex) return;
      // Recursive case:
      visited[vertex] = true;
      results.push(vertex);
      // add vertex to results list
      // mark vertex as visited
      let edges = this.adjacencyList[vertex];
      for (let i = 0; i < edges.length; i++) {
        if (!visited[edges[i]]) {
          innerFunc(edges[i]);
        }
      }
    }

    innerFunc(vertex);

    return results;
  }

  DFSIterative(start) {
    let stack = [];
    let results = [];
    let visited = {};
    stack.push(start);
    while (stack.length > 0) {
      let vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);

        this.adjacencyList[vertex].forEach(neighbor => {
          stack.push(neighbor);
        })
      }
    }
    return results;
  }

  BFS(start) {
    let q = [start];
    let visited = {};
    let vertex;
    while (q.length) {
      vertex = q.shift();
      visited[vertex] = true;

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) q.push(neighbor);
      })
    }
    return Object.keys(visited);
  }
}



let graph = new Graph;

graph.addVertex("Bozeman");
graph.addVertex("Denver");
graph.addVertex("San Diego");
graph.addVertex("Tulsa")
graph.addVertex("Phoenix")
graph.addEdge("Denver", "San Diego")
graph.addEdge("Bozeman", "San Diego")
graph.addEdge("Bozeman", "Tulsa")
graph.addEdge("Denver", "Phoenix")


// console.log(graph);
// graph.removeEdge("Bozeman", "Denver")
// console.log(graph);
// graph.removeVertex("Denver")
console.log(graph);
// console.log(graph.DFSRecursive("Denver"));
// console.log(graph.DFSIterative("Denver"));
console.log(graph.BFS("Denver"));