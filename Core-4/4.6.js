function countWords(inputWords) {
  return inputWords.reduce(function(hash, value){
    hash[value] = (+hash[value] || 0) + 1;
    return hash;
  }, {})
}

module.exports = countWords;
