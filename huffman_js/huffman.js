
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

var freq_object=frequency("aaabccdeeeeeffg");
console.log("The Frequency table");
console.log(freq_object); //the feeq of and words javascript object	
