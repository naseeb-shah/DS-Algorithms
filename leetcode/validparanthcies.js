 s = "()[]{}"



 function Valid(s){
var stk=[]


for(var i =0; i<s.length; i++){
    
    if(s[i]==')'||s[i]=='{'||s[i]=='['){
        console.log(s[i])
        if(stk[stk.length-1]='('){
            console.log(stk.length)
            stk.pop()
        }
        
    }else{
    stk.push(s[i])
}


}

return stk
 }
 console.log(Valid(s))