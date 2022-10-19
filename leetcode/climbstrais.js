const { func } = require("prop-types")

 var n =2

function Sai(n,map){
 
    if(n==1||n==2)
    return n

    if(n<=0)
    return 0
if(map[n]){
    return map[n]
}
 map[n]= Sai(n-2,map)+Sai(n-1,map)
 return map[n]

}
console.log(Sai(44,{}))
 var map={}
  map[6]=8
  console.log(map[4])
  if(map[4]){
    console.log(map[4])
  }