
// Huffman algorithm  in javascript
 


// frequency implementaion
function frequency(datain)
{
	freq={};
	words=datain.split("")
	for (i =0;i<words.length;i++)
	{
		if(words[i] in freq)
			freq[words[i]]+=1;
		else
			freq[words[i]]=1;
	}
	return freq;
}; //end of function


function sort_frequency(freq)
     {
        var tuples = [];
        for (var a in freq)
            tuples.push([freq[a],a]);
        tuples.sort();
        return tuples;
      }




var freq_object=frequency("aaabccdeeeeeffg");
console.log("The Frequency table");
console.log(freq_object); //the feeq of and words javascript object
console.log(sort_frequency(freq_object)); //sorted freq
