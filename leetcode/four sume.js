const { array } = require("prop-types")

nums = [2,2,2,2,2], target = 0
console.log(Sai(nums,8))

function Sai(nums,target){
    ans=[]
    nums.sort((a,b)=>a-b)
var n = nums.length-1
for(var i =0; i<=n;i++){
for(var j = i+1;j<=n; j++){
     var start=j+1
     var end=n
     while(start<end){
        sum
        var sum =nums[i]+nums[j]+nums[start]+nums[end]
        if(sum==target){
    ans.push([nums[i],nums[j],nums[start],nums[end]])
    while(start<end&&nums[start])
start++
end--

}else if(sum>target)
end--
else
start++

     }
}


}
return ans
}