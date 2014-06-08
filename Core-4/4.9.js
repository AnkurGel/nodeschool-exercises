var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    return console.log.apply(this, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger
