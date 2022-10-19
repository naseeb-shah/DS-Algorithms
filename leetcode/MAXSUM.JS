const { func } = require("prop-types")

nums = [-2,1,-3,4,-1,2,1,-5,4]
Output=6


 function Sai(arr){
    var maxint = Math.pow(2, 53)
    var max = -maxint - 1
    console.log(max)
     var end =0
      for(var i =0 ;i<arr.length ;i ++){

        end=end+arr[i]
        if(end>max){
            max=end
        }
        if(end<0)
        end=0
      }
      max
      return max
 }
 Sai(nums)
 