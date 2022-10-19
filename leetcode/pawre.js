
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    var ans=1
      var na=n
       if(na<0)na=-1*na
     
     while(na>0){
          
         
         if(na%2==0){
             x=x*x
             na=na/2
             
         }else{
             ans=ans*x
             na=na-1
         }
     }
     ans
     if(n<0)ans=1/ans
     return ans
     
     
 };
 console.log(myPow(2,-2))