var slice = Array.prototype.slice;

function logger(namespace) {
  var namespaced_console = console.log.bind(console.log, namespace)
  return namespaced_console;
}

module.exports = logger;
