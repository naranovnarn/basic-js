module.exports = function countCats(matrix) {
  let cats = 0;
  const re = /^\^\^$/
  for(let i = 0; i < matrix.length; ++i) {
    for(let j = 0; j < matrix[i].length; ++j) {
      if(re.test(matrix[i][j])) {
        cats++
      }
    }
  }

  return cats
}
