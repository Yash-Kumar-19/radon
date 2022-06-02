const trim = function(hardcodedString){
    let afterTrim = hardcodedString.trim()
    console.log(afterTrim)
  }
  
  const toLowerCase = function(hardcodedString){
      let afterLowerCase = hardcodedString.toLowerCase()
      console.log(afterLowerCase)
  }
  
  const toUpperCase = function(hardcodedString){
      let afterUpperCase = hardcodedString.toUpperCase()
      console.log(afterUpperCase)
  }
  
  module.exports.trim = trim
  module.exports.toLowerCase = toLowerCase
  module.exports.toUpperCase = toUpperCase
  