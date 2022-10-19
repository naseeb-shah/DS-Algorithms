const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        if (map.has(currentNumber)) return [map.get(currentNumber), i]
        console.log(map.get(23))
        map.set(target - currentNumber, i);
    }
    

};


arr=[1,5,7,8,9,15]
console.log(twoSum(arr,24))