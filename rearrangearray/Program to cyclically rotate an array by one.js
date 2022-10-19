// reverse the array, reverse the array from 0 to k-1, and then reverse the array from k to n-1

arr=[1,2,3,4,5]
k=2
/*reverse array=[5,4,3,2,1]
reverse array  from 0 to k-1
arr=[4,5,3,2,1]
 reverse array  k to n-1
 arr=[4,5,1,2,3]


*/
 Sai(arr,2)


function Sai(arr,k){
arr=rev(arr,0,arr.length-1)
arr=rev(arr,0,k-1)
arr=rev(arr,k,arr.length-1)
console.log(arr)
return arr
function rev(arr,start,end){
    while(start<end){
        var temp =arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--

    }
    return arr
}

    

}


