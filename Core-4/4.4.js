function getShortMessage(messages){
  return messages.filter(function(obj){
    return obj.message.length < 50
  }).map(function(validObj){
    return validObj.message;
  })
}
module.exports = getShortMessage;
