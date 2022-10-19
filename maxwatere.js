/*
1,8,6,2,5,4,8,3,7

max=min(i,rigth)*distance

1-----------
(1,8)*1=8
(1,6)*2=2
(1,2)*3=3
(1,5)*4=4
(1,4)*5=5
(1,8)*6=6
(1,3)*7=7
(1,7)*8=8
8--------------------

(8,6)*1=6
(8,2)*2=4
(8,5)*3=15
(8,4)*4=16
(8,8)*5=40
(8,3)*6=18
(8,7)*7=49

*/

height = [1,8,6,2,5,4,8,3,7]
var len=height.length-1
max=0

for(var i =0;i<0;i++){
    for(var j =i+1;j<len;j++){
          new_arr=Math.min(height[i],height[j])*(j-i)
       
    }
    
}

i=0
r=len


while(i<r){

    dis=r-i
    max=Math.max(max,Math.min(height[i],height[r])*dis)

    if (height[i] <= height[r])
    i += 1
else
    r -= 1
}
console.log(max)





