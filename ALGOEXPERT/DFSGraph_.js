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

function DFS(graphstart, visited = new Set()){

  visited.add(graphstart)
  //we get all destination related to particular origin or starting point
  let allDestinations = adjList.get(graphstart)
  console.log('allDestinations', allDestinations)

  for (let i = 0; i < allDestinations.length; i++) {

    if(!visited.has(allDestinations[i])){
      DFS(allDestinations[i], visited)
    }
    
  }

  return visited;


}

console.log('DFS("JFK" )', DFS("JFK" ))













