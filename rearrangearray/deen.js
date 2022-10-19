 var arr=[3,7,8,13,2,5]
//  3,5  7,2 8,13
console.log(sai(arr))
function sai(arr){
     var i =0;
     var j =arr.length-1
b=[]
k=0
     while(k<arr.length){
 b[k++]=arr[i++]
 b[k++]=arr[j--]

     }
     return b
}