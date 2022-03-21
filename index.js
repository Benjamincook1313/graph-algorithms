// const depthFirstPrint = (graph, src) => {
//   const stack = [src]

//   while (stack.length > 0){
//     const current = stack.pop()

//     console.log(current)

//     for(let neighbor of graph[current]){
//       stack.push(neighbor)
//     }  
//   }
// };

// const depthFirstPrint = (graph, src) => {
//   console.log(src)
//   for(let neighbor of graph[src]) {
//     depthFirstPrint(graph, neighbor)
//   }
// };

  const breadthFirstPrint = (graph, src) => {
    const queue = [ src ]
    while (queue.length > 0) {
      const current = queue.shift()
      console.log(current)
      for(let neighbor of graph[current]) {
        queue.push(neighbor)
      }
    }
  };

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

breadthFirstPrint(graph, 'a')