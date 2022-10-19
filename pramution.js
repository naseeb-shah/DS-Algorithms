

  function Promo(str,l,r){


if(l==r)
console.log(str)
else
 {
     for(var i =l; i<=r;i++){
    swap(str,l,i)
     Promo(str,l+1,r)
     swap(str,l,i)


     }
 }

  }


  function swap(str,i,j){

    var str= str.split("")
    str
    var temp = str[i]
    str[i]=str[j]
    str[j]=temp
    str
     return str.join()
  }
//    console.log(swap("abc",0,2))
 Promo("abc",0,2)