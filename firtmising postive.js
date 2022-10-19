var firstMissingPositive = function(nums) {
    
    var ans=1
nums.sort((a,b)=>a-b)
nums
    for(var i =0; i<nums.length ;i++){
ans
        
     if(nums[i]==ans)
            {
                ans+=1
                ans
                console.log(nums[i])
            }
    }
    
    return ans
}
 nums = [1,2,0]

console.log(firstMissingPositive(nums))