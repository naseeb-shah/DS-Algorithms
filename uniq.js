



console.log(Sai('abcabcbb'))
function Sai(s){
     var left=0;
     var right=0;
     var value=0
 var sum=new Set()
     while(right<s.length){
         if(sum.has(s[right])){
            // left
             left++
            //  left
            //  right
             right=left
            //  sum
            //  right
            //  return sum
             sum.clear()
            }else{
                sum.add(s[right])
                // console.log(sum.has(s[right]))
            right++
            value =Math.max(value,right-left)
         }
     }
     return value
}