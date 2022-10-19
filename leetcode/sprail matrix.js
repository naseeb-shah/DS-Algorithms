// var spiralOrder = function(matrix) {
//     ans=[]
//     var fistrow=0
//     var lastcol=matrix[fistrow].length-1
//     var lastrow=matrix.length-1
//     fistrow
//     lastcol
//     lastrow
// for(let i=0;i<matrix[fistrow].length;i++){
//     ans.push(matrix[fistrow][i])
// }
// for(let i=1;i<matrix.length;i++){
//     ans.push(matrix[i][lastcol])
// }

const { reject } = require("lodash")
const { func } = require("prop-types")

// for(let i =matrix[fistrow].length-2; i>0;i--){
//     ans.push(matrix[lastrow][i])

// }
// var deen 
// for(let i =matrix[fistrow].length-2; i>=0;i--){
//     ans.push(matrix[i][0])

// }
// for(let i=1;i<matrix[fistrow].length-1;i++){
//     ans.push(matrix[matrix.length-1][i])
// }

// return ans
// };
// matrix =[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// // matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// console.log(spiralOrder(matrix)) c
/*

 callback are function  take  another  as argument
 which called after  excuted some tasks
 if callback function  is  hard to read and  reconize bug ,and hard to mange that called callbackhell

 To avoid to callbackhell we are uses promises
 */


  function alima(deen){
     console.log("alima is")
      return deen
  }

  function deen(){
        console.log("good girl")
        return true
  }
  alima(deen)
//   --------------------------------------------------
var shah=1
// let definde   a  promiss
  var sai= new Promise(( resolove,reject)=>{
     if(shah==true){
         console.log("alima is good")
         resolove()
     }
     else{
        console.log("alima is abush")
        reject()
     }


  })

  sai.then(e=>{
    console.log("resolove")
  }).catch(e=>{
    console.log("reject")
  })

// -----------------------

function callback(f1,f3,shah){
     if(shah==true){
        return f1()
     }else{
        return f3()
     }
}

function f1(){
   console.log ( "alima is good")
    return flast()
}
function flast(){
     console.log("reslove")
}
function f3(){
    console.log ( "alima is abush")
     return f3last()
 }
 function f3last(){
      console.log("reject")
 }

callback(f1,f3,1)
/*
A callback function is a function passed into another function as an argument.
 This function is invoked inside the outer function to complete an action. 
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);


 Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to
  read and debug when dealing with asynchronous logic.
async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                ....
            });
        });
    });
});






