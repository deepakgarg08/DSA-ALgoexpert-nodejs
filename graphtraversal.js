//DFS
//first select any random node and print it
//expore if selected node is connected with other node
//if yes, then print that node and repeat
//if reaches null, then go back to previous node and see previous selected node has more edge

class GraphTraversal {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    for (let i = 0; i < v; i++) this.adj[i] = [];
  }

  // # function to add an edge to graph
  addEdge(v, w) {
    this.adj[v].push(w);
  }

  DFSUtil(v, visited) {
    visited[v] = true;
    console.log( v + "");


    for (let i of this.adj[v].values()) {
      let n = i;

      //if visted node to be true
      if (!visited[n]) {
        this.DFSUtil(n, visited);
      }
    }
  }

  DFS(v) {
    let visited = new Array(this.V);

    for (let i = 0; i < visited.length; i++) visited[i] = false;
    // console.log("visited", visited);

    //call the recursive helper to print DFS Traversal
    this.DFSUtil(v, visited);
  }
}

let g = new GraphTraversal(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log("g", g);
g.DFS(2);
