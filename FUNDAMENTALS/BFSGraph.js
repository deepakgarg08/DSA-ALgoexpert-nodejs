// const adjList = require("./adjacencymatrixNonNumbers");
// console.log('adjList', adjList.get(airport))

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM";

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const arrAirports = airports.split(" ");

//the graph
const adjList = new Map();

//add NOde
function addNode(airport) {
  adjList.set(airport, []);
}

//add Edge undirected
function addEdge(origin, destination) {
  adjList.get(origin).push(destination);
  adjList.get(destination).push(origin);
}

//create the graph

arrAirports.forEach(addNode);

routes.forEach((route) => {
  addEdge(...route);
});

//BFS

function BFS(start) {
  const visited = new Set();
  const queue = [start];
  
  while (queue.length > 0) {
      const airport = queue.shift();
      const destinations = adjList.get(airport);
      
    for (const destination of destinations) {
      if(!visited.has(destination)){
          visited.add(destination)
          queue.push(destination)
      }

    }
  }
  return visited
}

console.log("BFS::",BFS("HEL"));
