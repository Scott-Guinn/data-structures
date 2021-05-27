class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeVertex(vertex) {
    let edges = this.adjacencyList[vertex];
    edges.forEach(vert => {
      this.adjacencyList[vert] = this.adjacencyList[vert].filter(v => {
        return v !== vertex;
      })
    })

    delete this.adjacencyList[vertex];
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  dfsRecursive(start) {
    let visited = {};
    let results = [];
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) dfs(neighbor);
      })
    })(start)
    return results;
  }

  dfsIterative(start) {
    let visited = {};
    let results = [];
    let stack = [start];

    while(stack.length) {
      let current = stack.pop();
      if (!visited[current]) {
        results.push(current);
        visited[current] = true;
        this.adjacencyList[current].forEach(neighbor => {
          stack.push(neighbor);
        })
      }
    }
    return results;
  }

  bfs(start) {
    let visited = {};
    let results = [];
    let q = [start];

    while (q.length) {
      let current = q.shift();
      if (!visited[current]) {
        results.push(current);
        visited[current] = true;
        this.adjacencyList[current].forEach(neighbor => {
          q.push(neighbor);
        })
      }
    }
    return results;
  }
}

let g = new Graph;
g.addVertex("USA");
g.addVertex("Canada");
g.addVertex("Mexico");
g.addVertex("Panama");
g.addVertex("Cuba");
g.addEdge("USA", "Canada")
g.addEdge("USA", "Mexico")
g.addEdge("Panama", "Mexico")
g.addEdge("Cuba", "Mexico")
// g.removeVertex("USA")
// g.removeEdge("USA", "Canada")
console.log('g', g);
// console.log(g.dfsRecursive("Canada"));
console.log(g.dfsIterative("Canada"));
console.log(g.bfs("Canada"));