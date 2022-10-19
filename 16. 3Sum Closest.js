const { func } = require("prop-types")
nums = [-1,2,1,-4], target = 1




function threecool(arr,target){
var len= arr.length
var cool=1000000 
var ans=0
for(let i =0;i<len;i++){
    for(var j =i+1 ;j<len;j++){
        for(let k =j+1;k<len;k++){
            sum=arr[i]+arr[j]+arr[k]
            if(Math.abs(sum-target)<cool){
                cool=Math.abs(sum-target)
                ans=sum
            }
        }
    }
}
return ans

}
console.log(threecoolsum(nums,target))



function threecoolsum(arr,target){
arr.sort((a,b)=>a-b)
arr
var cool=100
ans=0
for(var i =0;i<arr.length-2;i++){
var j =i+1
var l =arr.length-1
while(j<l){
var sum = arr[i]+arr[j]+arr[l]
sum
if(Math.abs(sum-target)<cool){
    cool
    sum
    cool=Math.abs(sum-target)
    cool
     ans=sum
     ans
    
}else if(sum>target){
    l--
}else
j++



}


}
return ans


}