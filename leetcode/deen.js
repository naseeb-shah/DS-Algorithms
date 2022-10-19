var list = [    { date: '12/1/2011', reading: 3, id: 20055 },  
  { date: '13/1/2011', reading: 5, id: 20053 },
      { date: '14/1/2011', reading: 6, id: 45652 },   
       { date: '13/1/2011', reading: 5, id: 20051 },];
    //    Input:customFilter(list,'reading','5') Output:// returns list of two objects[    { date: '13/1/2011', reading: 5, id: 20053 },    { date: '13/1/2011', reading: 5, id: 20051 },] -------------------------------------------------------------------// Solution.jsvar list = [    { date: '12/1/2011', reading: 3, id: 20055 },    { date: '13/1/2011', reading: 5, id: 20053 },    { date: '14/1/2011', reading: 6, id: 45652 },    { date: '13/1/2011', reading: 5, id: 20051 },];

console.log(Filter(list,"date",'14/1/2011'))
function  Filter(list,keyName,value){
    var ans=[]
   for(var i =0;i<list.length;i++){
     if(list[i][keyName]==value){
        ans.push(list[i])
     }
   }

if(ans.length==0){
    return `Please fill valid  filter paramaters`
}
    return ans
    
    
    }