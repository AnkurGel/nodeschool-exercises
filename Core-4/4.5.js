function checkUsersValid(goodUsers){
  return function(checkUsers){
    return checkUsers.every(function(user){
      return goodUsers.map(function(x){
        return x.id;
      }).indexOf(user.id) >= 0
    });
  }
}

module.exports = checkUsersValid;
