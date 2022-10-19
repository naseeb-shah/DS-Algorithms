function Sai(str,num){
    var sum =0;
    var count=0
    for(let i =0; i<num;i ++){
        sum +=str[i]
    }
    leftsum =0
    for(let i =0; i<num-1;i ++){
        sum =sum-leftsum
        leftsum
        sum
        if(leftsum>=sum)
        count++
        leftsum  +=str[i]
    }
    return count
}
console.log(Sai([10, 4, -8, 7],4))