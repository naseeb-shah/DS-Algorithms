 nums = [2,3,1,1,4]
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    var i =0
    if(nums.length==1&&nums[0]==0)
        return true
    
    
  for( i =0; i<nums.length;i++){

    i+=nums[i]
      
      
      if(i>=nums.length)
          return true
        if(nums[i]<1)
          return false
   
  }
  return (i>=nums.length)

    
};  