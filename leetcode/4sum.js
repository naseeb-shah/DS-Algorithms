 arr = [1,0,-1,0,-2,2], target = 0


  function forsum(arr,target){
    ans=[]
arr.sort((a,b)=>a-b)
arr



for(var i =0;i<arr.length-3;i++)


for(var j =i+1;j<arr.length-2;j++){
j

var k =j+1
var end=arr.length-1
 while(k<end){

 var sum=arr[i]+arr[j]+arr[k]+arr[end]
 if(sum==target){
    an=[arr[i],arr[j],arr[k],arr[end]]
    ans.push(an)
    while(arr[k] === arr[k+1]) k++;
    while(arr[end] === arr[end-1]) end--;
                    k++;
                    end--;
k++
end--
 }
 if(sum>target)
 end--
 else
 k++
 
 while(arr[j] === arr[j+1]) j++;
 }
 while(arr[i] === arr[i+1]) i++;

}
return ans

  }

console.log(forsum(arr,target))