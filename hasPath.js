
// Breadth first 
const hasPath = (graph, src, dest) => {
  const queue = [ src ]

  while (queue.length > 0) {
    const current = queue.shift()
    
    if(current === dest) return true
    for(let neighbor of graph[current]){
      queue.push(neighbor)
    }
  }

  return false
};

// RECURSIVE
// const hasPath = (graph, src, dest) => {
//   if(src === dest) return true

//   for(let neighbor of graph[src]){
//     if(hasPath(graph, neighbor, dest)){
//       return true
//     }
//   }
//   return false
// };

// ADJACENCY List
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'], 
  j: ['i'],
  k: []
}

console.log(hasPath(graph, 'f', 'k'))