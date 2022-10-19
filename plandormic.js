const { func } = require("prop-types")

let str = '-121'

function check(str) {

    let i = 0;
    let j = str.length-1

    while (i < j) {
        if (str[i] ==str[j]) {
            i++
            j--
        } else if(str[i]=='-'){
            i++
        }else{
            return false
        }



    }
    return true
}
 console.log(check(str))