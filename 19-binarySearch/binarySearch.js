class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var mid = Math.round(nums.length/2)-1;
    var arrLeft = nums.slice(0,mid);
    var arrRight = nums.slice(mid+1, nums.length);
    
    if(target == nums[mid]){
      return true;
    }else if(target > nums[mid] && arrRight.length > 0){
      return this.binarySearch(arrRight,target);
    }else if(target < nums[mid] && arrLeft.length > 0){
      return this.binarySearch(arrLeft,target);
    }else{
      return false;
    }
   
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;