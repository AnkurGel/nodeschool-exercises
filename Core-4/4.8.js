function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(duck) {
    return Object.prototype.hasOwnProperty.call(duck, 'quack')
  }).length
}

module.exports = duckCount
