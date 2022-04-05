
const dijkstra = (graph, src, dest) => {
  const queue = [ [src, 0] ]
  const visited = new Set([src])

  while (queue.length > 0){
    const [node, cost] = queue.shift()
    if(node === dest)
    for(let neighbor of graph[src]){

    }
  }

};

//      (Seattle) <-2-> (Chicago)
//       /      \       /     \  
//      3       1      3      4    
//     /         \   /        \   
//  (SF) <-5-> (Idaho) <-6-> (NYC)  



const graph = {
  sf: { 'seattle': 3, 'idaho': 5 },
  seattle: {'sf': 3, 'idaho': 1, 'chicago': 2},
  idaho: {'sf': 5, 'seattle': 1, 'chicago': 3, 'nyc': 6},
  chicago: {'seattle': 2, 'idaho': 3, 'nyc': 4},
  nyc: {'idaho': 6, 'chicago': 4}
};


console.log(dijkstra(graph, 'sf', 'nyc')) // (sf: 3 -> seattle, seattle: 2 -> chicago, chicago: 4 -> nyc)
