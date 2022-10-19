

arr=[3,1,51,33,44,22]

 function QuickSort(arr,lb,ub){
    if(lb<ub){
         mid= Helper(arr,lb,ub)
         QuickSort(arr,lb,mid-1)
         QuickSort(arr,mid+1,ub)
         
        }
    }
    //  console.log(arr)
    function Helper(arr,lb,ub){
        var start=lb
        var pivot=arr[lb]
        var end=ub
        console.log(arr)
  
    while(start<end){
        
        while(arr[start]<=pivot)
        start++
        while(arr[end]>pivot)
        end-- 
        
        if(start<end)
        {
            var temp =arr[start]
            arr[start]=arr[end]
            arr[end]=temp
        }
        
        
    }
    var temp=arr[lb]
    arr[lb]=arr[end]
    arr[end]=temp
    return end

}

QuickSort(arr,0,arr.length-1)
console.log(arr)