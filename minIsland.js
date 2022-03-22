const minIsland = (grid) => {
  let smallest = 0

  const visited = new Set()

  let miSize = Infinity
  for(let r = 0; r <= grid.length; r += 1){
    for(let c = 0; c <= grid[0].length; c += 1){
      const size = exploreSize(grid, r, c, visited)
      if(size > 0 && size < minsize) {
        minSize = size
      }
    }
  }
  return minSize
};

const exploreSize = (grid, r, c, visited) => {
  const size = 0
  const rowInBounds = 0 <= r && r < grid.length
  const colInBounds = 0 <= c && c < grid[0].length
  if(!rowInBounds || !colInBounds) return 0

  if(grid[r][c] == 'W') return 0

  const pos = r + ',' + 'c'
  if(visited.has(pos)) return 0
  visited.add(pos)

  let size = 1
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