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

//DFS

function DFS(start, visited = new Set()) {
  // console.log("start", start);
  visited.add(start)
  // console.log('visited', visited)
  const destinations = adjList.get(start);
  // console.log('destinations', destinations)

  for (const destination of destinations) {
    if (!visited.has(destination)) {
      DFS(destination, visited);
    }
  }
  return visited;
}
// console.log("Adj",adjList);
// console.log("DFS::", DFS("HEL"));
console.log("DFS::", DFS("MEX"));


/** 
 * dj Map(11) {
  'PHX' => [ 'LAX', 'JFK' ],
  'BKK' => [ 'MEX', 'LIM' ],
  'OKC' => [ 'JFK' ],
  'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],       
  'LAX' => [ 'PHX', 'MEX' ],
  'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],       
  'EZE' => [ 'MEX' ],
  'HEL' => [ 'JFK' ],
  'LOS' => [ 'JFK' ],
  'LAP' => [],
  'LIM' => [ 'MEX', 'BKK' ]
}
 */


/**
 * DFS:: Set(10) {
  'HEL',
  'JFK',
  'PHX',
  'LAX',
  'MEX',
  'BKK',
  'LIM',
  'EZE',
  'OKC',
  'LOS'
}
 */

/**
 * 
 * DFS:: Set(10) {
  'MEX',
  'LAX',
  'PHX',
  'JFK',
  'OKC',
  'HEL',
  'LOS',
  'BKK',
  'LIM',
  'EZE'
}
 */