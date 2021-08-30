//total no of vertex in graph (0-8) in this example
let V = 9;

function dijkstra(graph, src) {
  //destination and shortestpathset

  let dist = new Array(V);
  let sptSet = new Array(V);

  for (let i = 0; i < V; i++) {
    dist[i] = Number.MAX_VALUE;
    sptSet[i] = false;
  }

  dist[src] = 0;
  for (let count = 0; count < V - 1; count++) {
    let u = minDistance(dist, sptSet);
    console.log('u', u)
    sptSet[u] = true;

    for (let v = 0; v < V; v++) {
      if (
        !sptSet[v] &&
        graph[u][v] != 0 &&
        dist[u] != Number.MAX_VALUE &&
        dist[u] + graph[u][v] < dist[v]
    
        ) {
          console.log('[v]', v)
          console.log('dist[u],vertex', dist[u],u)
        dist[v] = dist[u] + graph[u][v];
        console.log('dist[v]', dist[v])
      }
    }
  }
  return dist;
}

function minDistance(dist, sptSet) {
  console.log('sptSet', sptSet)
  // console.log('dist', dist)
  let min = Number.MAX_VALUE;
  let min_index = -1;
  console.log('..................');
  for (let v = 0; v < V; v++) {
    if (sptSet[v] == false && dist[v] < min) {
      console.log('sptSet[v],v', sptSet[v],v)
      console.log('dist[v]', dist[v])
      min = dist[v];
      console.log('min', min)
      min_index = v;
      console.log('min_index', min_index)
    }
  }
  return min_index;
}

// Driver code
let graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];

console.log("dijkstra(graph, 0)", dijkstra(graph, 0));
