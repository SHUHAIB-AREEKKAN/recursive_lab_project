
var codes={}

function frequency(datain)
{
  freq={};
  words=datain.split("");
  for(i=0;i<words.length;i++)
  {
    if (words[i] in freq)

      freq[words[i]]+=1;

    else

      freq[words[i]]=1;

  }
  return freq;
};  // end of function





function sortFreq(freq)
{
  var packed_array=[];

  for (var key in freq)
     packed_array.push([freq[key],key]);// [(key of freq,freq[key]=value)]

  //packed_array.sort(function(a,b){a[1]-b[1]}); //sort ascending order with respect to second elemnt thats a[1] ,b[1]

  packed_array.sort()
  //console.log(packed_array);

  return packed_array;
}; // end of function

function buildTree(tuples)

    {var i=1;
       while (tuples.length > 1)
       { 
	 var leastTwo = tuples.slice(0,2);
         var theRest  = tuples.slice(2,tuples.length);
	 //console.log(theRest)
         var combFreq = leastTwo[0][0] + leastTwo[1][0];
	 var tuples=theRest;
	 var list=[combFreq,leastTwo];
	 tuples.push(list);
         tuples.sort();
	
	
        }

      return tuples[0];
    };

function trimTree(tree)
	{
	 var p =tree[1];
	 if(typeof p === 'string')
		return p;	
	 else
		return Array(trimTree(p[0]),trimTree(p[1]));
	}


function assignCode(node,pattern='')
{
	if (typeof node=='string')
		codes[node]=pattern;
	else
	{
		assignCode(node[0],pattern+"0");
		assignCode(node[1],pattern+"1");
	}


}

function Encode(datain)
{

	var tmp="";
	for (i=0;i<datain.length;i++)
		{
		tmp+=codes[datain[i]]
		}

	return tmp 

}






var freq_object=frequency("aaabccdeeeeeffg");
//console.log("The Frequency table");
//console.log(freq_object); //the feeq of and words javascript object
ses=sortFreq(freq_object);
//console.log(ses);
ses2=buildTree(ses)
ses3=trimTree(ses2)
assignCode(ses3)
console.log(codes)
encoded_data=Encode("aaabccdeeeeeffg")
console.log(encoded_data)

