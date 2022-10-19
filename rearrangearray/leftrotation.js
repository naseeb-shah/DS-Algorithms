
// JavaScript code for above implementation
arr = [1, 2, 3, 4, 5, 6, 7];
leftRotate(arr, 2, 7);
console.log(arr)

function leftRotate(arr, d, n)
{
	if(d == 0 || d == n)
		return;
	let i = d;
	let j = n - d;
	while (i != j)
	{
		if(i < j)
		{
		
		// A is shorter
			arr = swap(arr, d - i, d + j - i, i);
			j -= i;
		}
		else{ // B is shorter
			arr = swap(arr, d - i, d, j);
			i -= j;
		}
	}
	arr = swap(arr, d - i, d, i);
	
	// This code is contributed by rohitsingh04052.
}

function swap(arr,i,j){
     var temp=arr[i]
     arr[i]=arr[j]
     arr[j]=temp
     return arr
}
