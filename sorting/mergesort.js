arr=[1,2,3,4]
b=[5,6,7,8]
mergesort(arr,0,arr.length-1)
function mergesort(a,l,r)
{
    if(l>=r){return}
    
    else{
        // var mid =Math.floor((l+(r-l))/2)
        var mid =l+ parseInt((r-l)/2);
        mergesort(a,l,mid)
        mergesort(a,mid+1,r)
        merge(a,l,r,mid)
    }

}

function merge(arr,l,r,m){

l=m-l
r=(r-m)+1
var left=new Array(l)
var right=new Array(r)
for (let k=0; k<l;k++){

    left[k]=arr[l+k]
    left
}
for (let k=0; k<r;k++){
    r
    right[k]=arr[m+1+k]
    console.log(arr[m+1+k])
    right
}
var p,q,r
p=q=0
p
q
s=l
// r=l
while(p<l&&q<r){
    if(left[p]<right[q]){
        arr[r]=left[p]
        p++
    }else{
        arr[r]=right[q]
        q++

    }
    s++
}
while (p < l) {
    arr[s] = left[p];
    p++;
    s++;
}
// while (q< r) {
//     arr[s] = right[q];
//     s++;
//     q++;
// }
arr
 
}

















// function Merge(a,b){
// main=[]
// var i=0 ,j=0,k=0
// while(k<a.length+b.length){
//     if(a[i]>b[j]){
//         main[k]=b[j]
//         j++
//         k++
//     }else if(a[i]<=b[j]){
//         main[k]=a[i]
//         i++
//         k++
//     }
//     else if(i=a.length-1){
//         i
//         k
//         main[k++]=b[j++]
//     }  else if(j=b.length-1){
//         j
//         main[k++]=a[i++]
//     }

// }
// console.log(main)

// }