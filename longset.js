s = "abcabcb"

function sai(str){
    var res=0
    for(var j =0;j<str.length;j++){
    var visited=new Array(256)
for(let i =j; i<str.length;i++){

    console.log(str.charCodeAt(j))
    if(visited[str.charCodeAt(j)]==true){
        break;
    }else{
res=Math.max(res,(i-j)+1)
        visited[str.charCodeAt(j)]==true
}



}
}
console.log(res)

}
sai(s)
