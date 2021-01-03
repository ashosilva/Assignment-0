function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1){
    throw "Array too small";
  }
  var i = 0;
  while(i < nums.length-1){
    for(var j = i+1; j < nums.length; j++){
      if((nums[i] + nums[j]) == target) {
        return true;
      }
    }
    i++
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;