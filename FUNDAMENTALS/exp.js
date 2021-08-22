class Graph1 {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) this.adj[i] = [];
  }

  // Function to add an edge into the graph
  addEdge(v, w) {
    // Add w to v's list.
    this.adj[v].push(w);
  }
}


let g = new Graph1(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
console.log("g", g);

class Graph {
  // Constructor
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) this.adj[i] = [];
  }

  // Function to add an edge into the graph
  addEdge(v, w) {
    // Add w to v's list.
    this.adj[v].push(w);
    console.log("this.adj", this.adj);
  }
}

// Driver Code
g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

// g.DFS(2);

// This code is contributed by avanitrachhadiya2155
