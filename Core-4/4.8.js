function duckCount() {
  var args = []
  for(var o in arguments) {
    args = args.concat(arguments[o])
  }
  return args.filter(function(duck) {
    return Object.prototype.hasOwnProperty.call(duck, 'quack')
  }).length
}

module.exports = duckCount
