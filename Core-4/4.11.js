function arrayMap(arr, fn) {
  return arr.map(function(x) {
    return [x].reduce(fn, x);
  })
}
module.exports = arrayMap;
