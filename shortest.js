const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const queue = [ [nodeA, 0] ]
  const visited = new Set([ nodeA ])

  while (queue.length > 0){
    const [node, dist] = queue.shift()
    if(node === nodeB) return dist
    for(let neighbor of graph[node]){
      if(!visited.has(neighbor)){
        visited.add([neighbor])
        queue.push([neighbor, dist + 1])
      }
    }
  }
  return -1
};

const buildGraph = (edges) => {
  const graph = {}

  for(let edge of edges) {
    const [a, b] = edge
    if(!(a in graph)) graph[a] = []
    if(!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
};


const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges, 'w', 'v'))