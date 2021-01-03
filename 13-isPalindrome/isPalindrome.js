function isPalindrome(word) {
  // Insert code here;
  var i = 0;
  var len = word.length;
  var value = true;
  

  while(i < Math.round(len/2) && value){
    if(word[i] != word[len-1]){
      value = false;
    }
    i++;
    len--;
  }
  return value;
}

// Do not edit this line;
module.exports = isPalindrome;