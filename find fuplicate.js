 nums = [3,1,3,4,2,2,2,2,2,]

 function Sai(nums){
var map={}
for(var i =0; i<nums.length ;i ++){
    map[nums[i]]=map[nums[i]]?map[nums[i]]+1:1

    if(map[nums[i]]>1){
        return nums[i]
    }
}

 }
console.log(Sai(nums))