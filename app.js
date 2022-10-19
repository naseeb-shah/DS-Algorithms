function runProgram(input) {
    input=input.split('\n')
    var c=input[0]
    var arr=[]
    var line=1
    for(let i=0;i<m;i++){
        arr.push(input[line++].split(' ').map(Number))
    }
    if(sai(arr)){
        for(let j=0;j<arr.length;j++){
                console.log(arr[j].join(" "))
            
                  }
    }
  }
  function sai(arrr){
       
    for(let i = 0; i < arrr.length; i++)
           { 
               let lll = 0;
               let rrr = arrr[i].length-1;
                
               while( lll <= rrr )
               {
                   
                   if(arrr[i][lll] == arrr[i][rrr])
                   {
                    
                       arrr[i][lll] = 1-arrr[i][lll];
                       arrr[i][rrr] = arrr[i][lll];
                   }
                   lll++;
                   rrr--;
               }
           }
           
           arrr=arrr.join("\n")
          return arrr;
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }