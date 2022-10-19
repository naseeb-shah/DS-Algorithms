// const { map } = require("lodash")


 n=10
 nums=[3,1,2,5,4,6,7,5]
 console.log(Sai([3, 1, 2, 5, 3]))
 function Sai(nums){
var k,m
    map={}
   
for(var i =0;i<nums.length;i++){


   map[nums[i]]=map[nums[i]]?map[nums[i]]+1:1

}

for(var i =1;i<=nums.length;i++){
   if(map[i]==2){
      // console.log(i)
      k=i
      
      
   }else if (map[i]==1){

   }else{
      // console.log(i)
      m=i

   }


  

}

return [k,m]


 }