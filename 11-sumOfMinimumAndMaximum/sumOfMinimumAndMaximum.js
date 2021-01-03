function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var min = nums[0];
  var max = nums[0];
  
  for(var i = 0; i < nums.length; i++){
    
    if(nums[i] < min){
      min = nums[i];
    }

    if(nums[i] > max){
      max = nums[i];
    }
    
  }

  return min + max;
}


// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;