 nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 

function Sai(nums,n){
    var ans=[]

     for(var i =0;i<n; i++){
        console.log(nums[i])
   
        ans.push(nums[i])
        ans.push(nums[i+n])

     }

return ans
}
Sai(nums,n)