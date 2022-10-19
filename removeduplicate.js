let nums = [0,0,1,1,1,2,2,3,3,4]
let newlength=0
for(var i =0 ;i<nums.length;i++){
 if(nums[i]!==nums[i+1])
 nums[newlength++]=nums[i]
 
}
nums
console.log(nums.splice(newlength))
nums