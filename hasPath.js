const hasPath = (graph, src, dest) => {
  const queue = [src]

  while (queue.length > 0) {
    const current = queue.shift()

    if(current === dest) return true

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
  return false
};


// const hasPath = (graph, src, dest) => {
//   if(src === dest) return true;
  
//   for (let neighbor of graph[src]) {
//     console.log(graph[src])
//     if (hasPath(graph, neighbor, dest) === true) {
//       return true
//     }
//   }

//   return false
// };

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'], 
  j: ['i'],
  k: []
}

hasPath(graph, 'f', 'k')