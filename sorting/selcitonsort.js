var arr=[25,1,4,47,3,25,45,34]
console.log(arr)

function SelectionSort(arr){
for(var i =0; i<arr.length-1 ;i++){
var min=i

     for(var j =i+1;j<arr.length; j++){
        if(arr[min]>arr[j])
        min=j

     }
     Swap(arr,i,min)

}

return  arr

}


function Swap(arr,i,j){
    var temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    return arr
}
console.log(SelectionSort(arr))