 function Sai(nums){
    let sortedArr = [...nums].sort((a,b)=> a-b)
    
    let uni = {}, res = []
    
    for(let i = 0; i < sortedArr.length; i++){
    	if(sortedArr[i] == sortedArr[i-1]) continue;
        uni[sortedArr[i]] = i
    }
    uni
    for(let i = 0; i < nums.length; i++){
        res[i] = uni[nums[i]]
    }
    return res
 }
 nums = [8,1,2,2,3]
 console.log(Sai(nums))