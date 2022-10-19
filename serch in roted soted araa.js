/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 nums = [4,5,6,7,0,1,2,3]
 var sarch = function(nums, target) {
    
    var i =0;
   var end= nums.length-1;
   var arr= nums
   
   while(i<=end){
       var mid=Math.floor(i+(end-i)/2)
       mid
       if(nums[mid]==target)
           return mid
       
       if(arr[i]<=arr[mid]){
           
           if(target>=arr[i]&&target<=arr[mid])
               end=mid-1
           else
               i=mid+1
       }
       else if(target>=arr[mid]&& target<=arr[end])
           i=mid+1
       else
           end =mid-1
       
       
   }
   
   return -1
   
};
console.log(sarch(nums,3))
function search(arr, l, h, key){
	if (l > h)
		return -1;

	let mid = Math.floor((l + h) / 2);
	if (arr[mid] == key)
		return mid;

	/* If arr[l...mid] is sorted */
	if (arr[l] <= arr[mid]) {
		/* As this subarray is sorted, we can quickly
		check if key lies in half or other half */
		if (key >= arr[l] && key <= arr[mid])
			return search(arr, l, mid - 1, key);
		/*If key not lies in first half subarray,
		Divide other half into two subarrays,
		such that we can quickly check if key lies
		in other half */
		return search(arr, mid + 1, h, key);
	}

	/* If arr[l..mid] first subarray is not sorted,
	then arr[mid... h]
	must be sorted subarray */
	if (key >= arr[mid] && key <= arr[h])
		return search(arr, mid + 1, h, key);

	return search(arr, l, mid - 1, key);
}
