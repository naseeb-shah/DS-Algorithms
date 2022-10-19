  var arr=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  

  function sai(arr){
 for(let i =0; i<arr.length;i++){
    for(let j = 0; j<arr[0].length;j++){

        if(arr[i][j]==0){
          
       arr[i][j]='a'
            
        }
    }
 }

 
 for(let i =0; i<arr.length;i++){
    for(let j = 0; j<arr[0].length;j++){
        if(arr[i][j]=='a'){
           for(let put=0;put<arr.length;put++){
            arr[put][j]=0
           }
           for(let put=0;put<arr.length;put++){
            arr[i][put]=0
           }

        }
    }
 }

  return arr


 }
 console.log(sai([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
 
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]