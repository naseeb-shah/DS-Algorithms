 matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output= [[7,4,1],[8,5,2],[9,6,3]]


 function  Sai(arr){
ans= []

for(var i =0; i<arr.length ;i ++){
    subarr=[]
    for(var j =arr.length-1 ;j>=0;j--){
        subarr.push(arr[j][i])
      
    }
    ans.push(subarr)
}
return ans

 }

 var rotate = function(matrix) {
     const n = matrix.length
     let i = 0
     let j = n-1
    
    while(i < j){
        [matrix[i], matrix[j]] = [matrix[j], matrix[i]]
        i++
        j--
        console.log(matrix)
    }
    
    // for(let p=0; p<n; p++){
    //     for(let q=p+1; q<=n-1; q++){
    //         [matrix[p][q] ,matrix[q][p]] = [matrix[q][p] ,matrix[p][q]]
    //     }
    // }
    return matrix
};
        rotate(matrix)