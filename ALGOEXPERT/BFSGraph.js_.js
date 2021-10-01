const airportsName = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM";

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["LAP", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

let airports = airportsName.split(" ");
//create a adjacency list i.e in matrix form

const adjList = new Map();

//add node

function addNode(airport) {
  adjList.set(airport, []);
}

function addEdge(source, destination) {
  adjList.get(source).push(destination);
  adjList.get(destination).push(source);
}

for (let i = 0; i < airports.length; i++) {
  addNode(airports[i]);
}

for (let i = 0; i < routes.length; i++) {
  addEdge(...routes[i]);
}
console.log("adjList", adjList);

function BFS(graphstart) {
  let visited = new Set()
  const queue = [graphstart];

  while (queue.length > 0) {
    let airport = queue.shift();
    let destinations = adjList.get(airport);
    console.log('destinations', destinations)

    for (let i = 0; i < destinations.length; i++) {
      if (!visited.has(destinations[i])) {
        visited.add(destinations[i]);
        queue.push(destinations[i]);
      }
    }
  }
  return visited
}

console.log('BFS("JFK" )...', BFS("JFK"));
