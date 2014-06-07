function reduce(arr, fn, initial) {
  var total_iters = arr.length - 1;
  var recur = function(i, prev) {
    if(i > total_iters) return prev;
    var current = arr[i]
    var result = fn(prev, current, i, arr)
    return recur(i+1, result)
  }
  return recur(0, initial);
}

module.exports = reduce;

