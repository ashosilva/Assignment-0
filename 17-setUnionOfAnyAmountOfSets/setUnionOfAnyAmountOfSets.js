function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var value = new Set();
  for(const set of args){
    for (const elem of set){
        value.add(elem);
    }
  }
  return value;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;