 var arr=[1,2,3]


 function Permutation(arr,l,r){
    if(l==r){
        console.log(arr)
    }
    for(var i =l;i<=r;i++){
        Swap(arr,i,l)
        Permutation(arr,l+1,r)
        Swap(arr,i,l)
        

    }

 }
 
 function Swap(arr,i,j){
arr

    var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    arr
    return arr
 }


 function Ga(arr){
    if(arr.length<=1) return arr

var i=arr.length-2

 while(i>=0&& arr[i]>=arr[i+1])i--


 if(i>=0){
    var j = arr.length-1
    while(arr[j]<=arr[i])j--
    Swap(arr,i,j)
    // var temp=arr[i]
    // arr[i]=arr[j]
    // arr[j]=temp

 }
var i =0,j=arr.length-1

while(i>j){
    var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    i++
    j--
}

console.log(arr)
 }
 Ga(arr)