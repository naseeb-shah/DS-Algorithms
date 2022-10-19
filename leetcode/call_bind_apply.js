

// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.



let arr= [1,2,4,5,6,7,8]
// arr=[]


new_arr=arr.map((x,i)=>{
    return dub(x)
 

})
console.log(arr)
console.log(new_arr)




 function dub(e){
    return e*2
 }

 

// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.
var ans=[]
  var forea=foreacharr=arr.forEach((e,i)=>{
    
    ans.push(e*2)


    // return e+2
 })
 console.log(ans)


 


































console.log(sai(1,2))

function sai(a,b){
    // function declrtain
    return a+b
}
 let alima=(a,b)=>{
    // arrow function
    //  function exprison
    return a+b
}
console.log(alima(1,2))



//  alima=[1,5,6,7,8,9,10,11]
alima=['sss',"am","aadjjdj",'bddj','xyz','saI']
 
  filterarr=alima.filter((e,i)=>{
    return e.includes('a')
 })

 console.log(filterarr)

   sai="den"
   console.log(!sai.includes('d'))
   console.log(sai.includes('x'))


  //  The reduce() method executes a reducer function for array element.

  //  The reduce() method returns a single value: the function's accumulated result.
   
  //  The reduce() method does not execute the function for empty array elements.
   
  //  The reduce() method does not change the original array.



   arr=[1,2,3,4,5,6,7,8]
  var sum =0
  for(var i =0; i<arr.length; i++){
    console.log(sum)
  // sum=sum+arr[i]
  sum+=arr[i]
  console.log(sum)
}
reducesum=arr.reduce((pre,cur)=>pre+cur,10)

/*
varibelsoter= reducesum
task arr=arr
function=.reduce
-----------------------
callback fuction
((pre,cur)=>pre-cur,10)
........................................................................
arr=[1,2,3,4,5,6,7,8]

----------------------
     pre=10, cur=1
reducesum=11
----------------------
 pre=11 cur=2
 reducesum=13
 ---------------------
 pre=13,cur=3
 r=16
 ---------------------
pre=16 , cur=4
r=20
-----------------
pre=20, cur=5
r=25
---------------
pre=25 , cur=6
r=31
-----------------
pre=31 , cur=7
r=38
--------------------
pre=38 , cur=8
r=46



*/
console.log(reducesum)


// reduce problems
 arr=[1,2,3,4,5,6,7,8]
 ans=arr.reduce((pre,cur)=>pre+cur,'')
console.log(ans)


// https://coursework.vschool.io/array-reduce-exercises/

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
var totalvoters=voters.filter((e)=>e.voted).reduce((pre,cur)=>pre+1,0)
console.log(totalvoters)