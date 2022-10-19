// a<b>c<d>e


var arr=[4,9,6,1,3,5,7]
function Hillclimb(arr){
    arr.sort((a,b)=>a-b)
    console.log(arr)
     for(var i =1;i<=arr.length ;i++){
if(i%3==0){
    var temp=arr[i-1]
    arr[i-1]=arr[i-1-1]
    arr[i-1-1]=temp

}
     }
     console.log(arr)
}
Hillclimb(arr)