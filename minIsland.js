const islandCount = (grid) => {
  let minSize = Infinity

  for(let r=0; r<grid.length; r++){
    for(let c=0; c<grid[0].length; c++){
      const size = exploreSize(grid, r, c, new Set())
      if(size > 0 && size < minSize) minSize = size
    }
  }
  return minSize
};

const exploreSize = (grid, r, c, visited) => {
  // check if we are inbounds of the grid
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length
  if(!rowInbounds || !colInbounds) return 0
  if(grid[r][c] === 'W') return 0

  // get current position
  const pos = r + ',' + c
  if(visited.has(pos)) return 0
  visited.add(pos)

  let size = 1
  // recursive access each item in the grid 
  size += exploreSize(grid, r-1, c, visited)
  size += exploreSize(grid, r+1, c, visited)
  size += exploreSize(grid, r, c-1, visited)
  size += exploreSize(grid, r, c+1, visited)

  return size
}


const grid = [
  ['W', 'L', 'W', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'L', 'W'],
  ['W', 'L', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'L', 'W'],
  ['W', 'W', 'W', 'L', 'L', 'W'],
  ['W', 'W', 'W', 'L', 'W', 'W']
];

console.log(islandCount(grid)) // 2