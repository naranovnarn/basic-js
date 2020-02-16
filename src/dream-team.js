module.exports = function createDreamTeam( members ) {
  if (Array.isArray(members)) {
    let name = '';
    members.map(function(item) { 
  
    if ( typeof item === "string" ) {
    name += item[0].toUpperCase()
    }
    })
    return name.split('').sort().join('')
  } else {
    return false
  }

};