

const dijkstra = (graph, src) => {
  const shortestPath = newGraph(graph)
  const queue = [ [src, 0] ]
  const visited = new Set( [src,0] )

  while (queue.length > 0){
    const [node, dist] = queue.shift()
    for(let neighbor of graph[node]){
      console.log(neighbor)
      if(!(visited.has(neighbor))){
        visited.add(neighbor)
        queue.push(neighbor)

        if(dist + shortestPath[totalCost] < shortestPath[node]){}
    }
  }
  return shortestPath
};

const newGraph = (graph) => {
  const obj = {}
  for(let key in graph){
    obj[key] = {
      totalCost: Infinity,
      prevNode: null
    }
  }
  return obj
};

//      (Seattle) <-2-> (Chicago)
//       /      \       /     \  
//      3       1      3      4    
//     /         \   /        \   
//  (SF) <-5-> (Idaho) <-6-> (NYC)  



const paths = {
  sf: [ {'seattle': 3}, {'idaho': 5} ],
  seattle: [ {'sf': 3}, {'idaho': 1}, {'chicago': 2} ],
  idaho: [ {'sf': 5}, {'seattle': 1}, {'chicago': 3}, {'nyc': 6} ],
  nyc: [ {'idaho': 6}, {'chicago': 4} ]
};


console.log(dijkstra(paths, 'sf')) 
// (sf: 3 -> seattle, seattle: 2 -> chicago, chicago: 4 -> nyc)
