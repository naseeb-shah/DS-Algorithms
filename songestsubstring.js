const { set, max } = require("lodash")

Input: s = "abcabcbb"


console.log(Sai(s))

function Sai(s){
max_len=0
    for(var i =0; i<s.length;i++){
        var ans=''
        var map=new Set()
        for(var j =i ;j<s.length;j++){
            map.add(s[j])
            map
ans+=s[j]
if(ans.length==map.size){
    if(ans.length>max_len)
    max_len=ans.length
}

        }
    }
    return max_len
}
