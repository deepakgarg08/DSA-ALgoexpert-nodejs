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
console.log('adjList 2', adjList)





