


nums = [1,2,0,1]
console.log(Sai(nums))

function Sai(nums){
  nums.sort((a,b)=>a-b)
  
    var pre=nums[0]
    var count=1
    var maincount=1
    for(var i =1; i<nums.length; i++){
        if(nums[i]==nums[i-1])continue
        else if(nums[i]==nums[i-1]+1)count++
        else{
        maincount=Math.max(maincount,count)
    count=1
        }

    }
  

maincount=Math.max(maincount,count)
    

return maincount
}