
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
};

// BREADTH FIRST
const hasPath = (graph, src, dest, visited) => {
  const queue = [ src ]

  while (queue.length > 0){
    const current = queue.shift()
    if(!visited.has(current)) {
      visited.add(current)

      for(let neighbor of graph[current]){
        if(neighbor === dest) return true
        queue.push(neighbor)
      }
    }
  }

  return false
};

// RECURSIVE DEPTH FIRST
const hasPath = (graph, src, dest, visited) => {
  if(src === dest) return true
  if(visited.has(src)) return false

  visited.add(src)
  
  for(let neighbor of graph[src]){
    if(hasPath(graph, neighbor, dest, visited) === true){
      return true
    }
  }
  return false
};

const buildGraph = (edges) => {
  const graph = {}

  for(let edge of edges){
    const [a, b] = edge

    if(!(a in graph)) graph[a] = []
    if(!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
};

// EDGE LIST
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

console.log(undirectedPath(edges, 'j', 'm'))
