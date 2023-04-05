// Returns the matching list of drivers
function findMatching(array, string) {
  return array.filter(function (name) {
    return name.toUpperCase() === string.toUpperCase()
  })
}

// Returns all drivers whose names begin with the provided letters
function fuzzyMatch(array, string) {
  return array.filter(function (name) {
    return name.startsWith(string)
  })
}

// Return each element whose name property matches the provided string argument
function matchName(array, string) {
  return array.filter(function (item) {
    return item.name === string
  })
}
