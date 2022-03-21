const undirectedPath = (edges, node1, node2) => {
  const graph = buildGraph(edges)
  console.log(buildGraph(edges))
  return hasPath(graph, node1, node2)
};

const hasPath = (graph, src, dst) => {
  
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

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm')
