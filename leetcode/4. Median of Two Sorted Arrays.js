nums1 = [1,3,4,5,6,7,8], nums2 = [2]

function Sai(num1,nums2){

    var num=num1.concat(nums2).sort((a,b)=>a-b)
    len=num.length
 if(len%2==1){
 ans=num[Math.round(len/2)-1]
 ans=ans.toFixed(5)
 return ans
 }else{
    var ans=(num[Math.round(len/2)-1]+num[Math.round(len/2)])/2
    ans=ans.toFixed(5)
    return ans
 }


}
deen=(Sai(nums1,nums2))
console.log(deen)
