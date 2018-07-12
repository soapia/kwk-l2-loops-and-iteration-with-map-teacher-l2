
function lowerCaseStudentNames(array) {
  return array.map(function (thing) {
  thing = thing.toLowerCase()
  return thing
  })
}

function nameToAttributes(array) {
  return array.map(function (thing) { // makes a function
  thing = thing.split(" ") // split a string based on a space
  thing = {firstName: thing[0], lastName: thing[1]} // 
  return thing
  })
}

function attributesToPhrase(array) {
  return array.map(function (thing) {
     return `${thing.name} is from ${thing.hometown}`
  })
}

