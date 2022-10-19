var defangIPaddr = function(address) {
    
    add= address.split('')
    
     for(var i =0; i<add.length;i++){
         if(add[i]==".")
             add[i]="[.]"
     }
    
    return add.join('')
    
        
    
};