//  function Sai(num){
//     str=num.toString()
//            sum=0
//            for(var j = 0 ; j<str.length  ;   j ++){
//                 sum += (+str[j])
                
//            }
       
//           int= sum
//           if(  int % 9 == 0){
//             return 9
//           }else{
//               return(int  % 9) 
//           }
           
//         } 

//        console.log (Sai(55555))


// JavaScript program for the above approach

// Function to find and print longest
// substring without repeating characters.
function sai(str)
{
	var i;
	var n = str.length;


	var st = 0;


	var currlen;


	var maxlen = 0;

	
	var start;

	// Hash Map to store last occurrence of each
	// already visited character.
	var pos = new Map();

	// Last occurrence of first character is index 0;
	pos.set(str[0], 0);

	for (var i = 1; i < n; i++) {

		// If this character is not present in hash,
		// then this is first occurrence of this
		// character, store this in hash.
		if (!pos.has(str[i]))
			pos.set(str[i],i) ;

		else {
			// If this character is present in hash then
			// this character has previous occurrence,
			// check if that occurrence is before or after
			// starting point of current substring.
			if (pos.get(str[i]) >= st) {

				// find length of current substring and
				// update maxlen and start accordingly.
				currlen = i - st;
				if (maxlen < currlen) {
					maxlen = currlen;
					start = st;
				}

				// Next substring will start after the last
				// occurrence of current character to avoid
				// its repetition.
				st = pos.get(str[i]) + 1;
			}

			// Update last occurrence of
			// current character.
			pos.set(str[i], i);
		}
	}

	// Compare length of last substring with maxlen and
	// update maxlen and start accordingly.
	if (maxlen < i - st) {
		maxlen = i - st;
		start = st;
	}

	// The required longest substring without
	// repeating characters is from str[start]
	// to str[start+maxlen-1].
	
	return str.substr(start,maxlen);
}

var str = "GEEKSFORGEEKS";


    
       