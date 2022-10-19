var a = [ 1, 2,3,4,5,6 ];
console.log(even(a))
function even(arr){



    var n =arr.length -1;
     var newarr=[...arr]
     newarr.sort((a,b)=>a-b)
var index=0
     var start=0,end=n
  for(let i =n; i>=0;i--){
    if(i%2!=0){
        arr[i]=newarr[end]
        end--
    }else{
        arr[i]=newarr[start]
        start++
    }
  }
  return arr
}