let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
let n = arr.length;
let key = 9;
console.log(Search(arr,key))

/* 
Search in rotated sorted array using binary Search 
find pivot element 


*/


function Search(arr, key) {
    var h = arr.length - 1
    var l = 0;
    while (h =>l) {
        var mid = Math.floor(l + (h - l) / 2);
        if (arr[mid] == key)
            return mid

        else if (arr[l] <= arr[mid]) {

            if (key >= arr[l] && key < arr[mid]) {
                h = mid - 1
            }else{
                l=mid+1
            }
        }else if(arr[mid]<=arr[h]){

            if(key>arr[mid]&&key<=arr[h]){
                l=mid+1

            }else{
                h=mid-1
            }
        }




    }

    return -1
}