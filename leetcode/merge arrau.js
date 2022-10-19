nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
sai(nums1,nums2,nums1.length,nums2.length)
function sai(nums1,nums2,m,n){
var i =0, j =0 , k =0
    ans=[]
nums1.sort((a,b)=>a-b)
nums2.sort((a,b)=>a-b)
while( i<m&&j<n)
{

    if(nums1[i]>nums2[j]){
        ans.push(nums2[j])
        j++
        ans
    }else{
        // console.log(nums1[i])
        ans.push(nums1[i])
        ans
        i++
    }
}
while(i<m){
    ans.push(nums1[i])
    i++
}
while(j<n){
    ans.push(nums2[j])
    j++
}


return ans


}