/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (var i = 0; i < preferences.length; i++) {
    if (i === (preferences[preferences[preferences[i]-1]-1] - 1)){
      count = count + 1;  
    }
  }
  return Math.floor(count/3);
};
