function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  return args.reduce( (i, j) => {
    return i * j;
  });
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;