

function Pascal(n){
 for(var i =1; i<=n; i++){

var col=1
arr=[]
for(var j =1;j<=i;j++){
    arr.push(col)
     col=col*(i-j)/j
}
console.log(arr)

 }


}