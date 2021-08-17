//BFS
//START from root and explore all its leaves
//then then iterate its connected node
class GraphTraversalBFS {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) this.adj[i] = [];
  }

  // # function to add an edge to graph
  addEdge(v, w) {
    this.adj[v].push(w);
  }

  BFSUtil(v, visited) {
    let queue = [];
    queue.push(v);
    let s = queue.shift();
    console.log('queue', queue.length)

    visited[v] = true;
    //result

    // while (queue) {
    //   let s = queue.shift();

    //   console.log(s + "-");

    //   // for (let i of this.adj[v].values()) {
    //   //   let n = i;

    //   //   //if visted node to be true
    //   //   if (!visited[n]) {
    //   //     this.BFSUtil(n, visited);
    //   //   }
    //   // }
    // }
  }

  BFS(v) {
    let visited = new Array(this.V);

    for (let i = 0; i < visited.length; i++) visited[i] = false;

    //call the recursive helper to print BFS Traversal
    this.BFSUtil(v, visited);
  }
}

let g = new GraphTraversalBFS(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log("g", g);
//here 2 in parameters means take it as root node
g.BFS(2);
