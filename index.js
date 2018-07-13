
function lowerCaseStudentNames(array) {
  return array.map(function (thing) {
  thing = thing.toLowerCase()
  return thing
  })
}

// function nameToAttributes(array) {
//   return array.map(function (thing) { // makes a function
//   thing = thing.split(" ") // split a string based on a space
//   thing = {firstName: thing[0], lastName: thing[1]} // 
//   return thing
//   })
// }

function separateName(studentName){
  var arrOfNames = studentName.split(' ');
  var attributes = {
    firstName: arrOfNames[0],
    lastName: arrOfNames[1]
  } 
  return attributes;
}
function nameToAttributes(students){ // sofia checked this is right
  return students.map(separateName);
  }




function attributesToPhrase(array) {
  return array.map(function (thing) {
     return `${thing.name} is from ${thing.hometown}`
  })
}


console.log(nameToAttributes(["Jane, Doe", "Bob Doe"]))
