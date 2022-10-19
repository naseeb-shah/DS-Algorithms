nums=[1,1,1,2,2,3]
// ans 5, nums = [1,1,2,2,3,_]

// nums = [0,0,1,1,1,1,2,3,3]

function Sai(nums){
    var ans=[]
    var count =1
     for ( var i =0; i<nums.length ; i ++){
         
         if(nums[i]==nums[i-1]){
             count++
         }else{
             count=1
         }
           if(count<=2){
               ans.push(nums[i])
               
           }
     }
   return ans

}
console.log(Sai(nums))