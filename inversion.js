//  search 2d matrix 

const { func } = require("prop-types")


var arr=[[1,3,5,7],[10,11,16,20],[23,30,34,60]]

console.log(sai(arr,60))

function sai(nums,target){
for(var i =0; i<nums.length ;i ++){
    if(bn(nums[i],0,nums[i].length-1))
    return true
}



 
    function bn(arr,low,high){
while(low<=high){
        var mid=Math.floor(low+(high-low)/2)
        mid
        console.log(arr[mid])
        if(arr[mid]==target){
            return true
        }else if(arr[mid]>target){
            high=mid-1
        }else{
            low=mid+1
        }
    }
return false
    }

return false

}