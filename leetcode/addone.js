var arr=[9,9]
carry=0

arr[arr.length-1]=arr[arr.length-1]+1
for(var i =arr.length-1; i>=0;i--){
    arr[i]=arr[i]+carry
    if(arr[i]>=10)
    {
        arr[i]=arr[i]-10
        carry=1
    }else{
        carry=0
    }
    if(i==0&&carry==1){
        arr.unshift(1)
    }

}
console.log(arr)