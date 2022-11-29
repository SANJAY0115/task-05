//Do the below programs in anonymous function & IIFE & Arrow:

// 1. Print odd numbers in an array

//anonymous function
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let  res=[];
var odd = function(arr)
{
    for(i=0;i<arr.length;i++)
  {
        if(arr[i]%2!==0)
        {
        res.push(arr[i]);
    }
     
  }
     return res;
};
console.log(odd(arr));
//---------------------------------------------------------------
// IIFE
(function odd1(arr1)
{
var res1=[];
    for(var i=0;i<arr1.length;i++)
  {
    
        if(arr1[i]%2!==0)
        {
        res1.push(arr1[i]);
    }
     }
     console.log(res1);

})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
//-------------------------------------------------------------------
//  arrow
var odd3=(arr3)=> {
    var res3=[];
    for(var i=0;i<arr3.length;i++)
    {
        if(arr3[i]%2!==0)
        {
            res3.push(arr3[i]);
        }
    }
    return res3;
};
console.log(odd3([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

//======================================================================================

// 2. Convert all the strings to title caps in a string array

// anonymous function

let arr4 = ["sun","moon","planet","earth"];

let res4=[];

let caps= function()
{
    for(var i=0;i<arr4.length;i++)
    {
      let ans4= arr4[i].charAt(0).toUpperCase() + arr4[i].slice(1);
      res4.push(ans4);
     }
     console.log(res4);
};
caps(arr4);

//------------------------------------------------------

// IIFE
(function caps(arr)
{
    let res5=[];
    for(var i=0;i<arr.length;i++)
    {
      let ans5= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      res5.push(ans5);
     }
     console.log(res5);
})(["sun","moon","planet","earth"])
//----------------------------------------------------------

// Arrow

let caps2= (arr)=>{
    
    let res6=[];
    for(var i=0;i<arr.length;i++)
    {
      let ans6= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      res6.push(ans6);
     }
     return res6;
};
console.log(caps2(["sun","moon","planet","earth"]));

//=================================================================================

// 3. Sum of all numbers in an array

// anonymous function

let array = [1,2,3,4,5,6,7,8,9,10];

let sumOfNum = function(array)
{
    var sum =0;
    for(var i=0;i<array.length;i++)
    {
        
        sum=sum+array[i];
    }
    return sum;
};
console.log(sumOfNum(array));

//--------------------------------------------------

// IIFE

(function sumOfNum(array)
{
    var sum=0;
    for(var i=0;i<array.length;i++)
    {
        sum = sum+array[i];
    }
    console.log(sum);
}
)([1,2,3,4,5,6,7,8,9,10])

//------------------------------------------------------

// Arrow

let sumOfNum1 = (array)=> {
    let sum=0;
    
  for(i=0;i<array.length;i++)
  {
      sum = sum + array[i];
  }
  return sum;
    
};
console.log(sumOfNum1([1,2,3,4,5,6,7,8,9,10]));

//================================================================================================

// 4. Return all the prime numbers in an array

//output : [2, 3, 5, 7, 11, 13, 17, 19]

// anonymous:

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const fin = function(num) 
{
    for (let i = 2; i < num; i++) 
  {
    if (num % i === 0)
    {
        return false;
    }
  }
  return num !== 1;
};
console.log(num.filter(fin));
//---------------------------------------------------------------------

// Arrow

const array9 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const fin1 = array9.filter(num => {
    
  for (let i = 2; i < num; i++) 
  {
    if (num % i === 0)
    {
        return false;
    }
  }
  return num !== 1;
});
console.log(fin1);
//==============================================================================================

// 5. Return all the palindromes in an array

// anonymous                             //output = [11,22,33,44,55]

let numb=[11,15,22,26,33,37,44,49,55];       

let palindrome = function(numb)
{
   let res=[];
   let final=[];
    for(var i=0;i<numb.length;i++)
    {
       let rev = numb[i].toString().split("").reverse().join("");
         res.push(rev);

         if(numb[i]==res[i])
          {
             final.push(numb[i]);
           }
    }
     console.log(final);
  };
 palindrome(numb);

 //---------------------------------------------------------------------------------

 // IIFE

 (function palindrome(numb)
 {
    let res=[];
    let final=[];
     for(var i=0;i<numb.length;i++)
     {
        let rev = numb[i].toString().split("").reverse().join("");
          res.push(rev);
 
          if(numb[i]==res[i])
           {
              final.push(numb[i]);
            }
     }
      console.log(final);
   })([11,15,22,26,33,37,44,49,55])

 //---------------------------------------------------------------------------------
 //Arrow

 let numb1=[11,15,22,26,33,37,44,49,55];
 
  let palindrome1=(numb1)=>
 {
    let res=[];
    let final=[];
     for(var i=0;i<numb1.length;i++)
     {
        let rev = numb1[i].toString().split("").reverse().join("");
          res.push(rev);
 
          if(numb1[i]==res[i])
           {
              final.push(numb1[i]);
            }
     }
      console.log(final);
   };
  palindrome1(numb1);


//==============================================================================================

// 6. Return median of two sorted arrays of the same size.

// odd array median in anonymous function

let array1= [1,2,3,4,5];
let array2 = [6,7,8,9];
 let array3 =array1.concat(array2);
 let len = array3.length-1;
 var median = function(array3,len)
 {
    if(len%2!==0)
    {
        let mid = len/2;
        let avg1 = array3[Math.floor(mid)];
        let avg2 = array3[Math.ceil(mid)];
        console.log(avg1,avg2);
    }
    else if(len%2==0)
    {
         let mid =len/2;
    
       console.log(array3[mid]);
    }
 }
 median(array3,len);                     // output = 5
 //-----------------------------------------------------------------

 // even array meddian in IIFE 

 (function median(array3,len)
 {
    if(len%2!==0)
    {
        let mid = len/2;
        let avg1 = array3[Math.floor(mid)];
        let avg2 = array3[Math.ceil(mid)];
        console.log(avg1,avg2);
    }
    else if(len%2==0)
    {
         let mid =len/2;
         console.log(array3[mid]);
    }
 }) ([1,2,3,4,5,6,7,8,9,10],9);   
                                                 // output = 5,6

 //=======================================================================================

// 7.Remove duplicates from an array   //output : [ 1, 2, 3, 4, 5, 6 ]

//anonymous

const arry=[1,2,3,2,3,4,5,6,1];

let duplicates = function(arr)
{
    let fin=[];
    for(var i=0;i<arr.length;i++)
    {
      if(!fin.includes(arr[i]))
            {
                fin.push(arr[i]);
            }
        }
   
    return fin;  
    };
console.log(duplicates(arry));

//-------------------------------------------------------

// IIFE

(function duplicates(arr)
{
    let fin=[];
    for(var i=0;i<arr.length;i++)
    {
      if(!fin.includes(arr[i]))
            {
                fin.push(arr[i]);
            }
        }
   
    console.log(fin);  
    })([1,2,3,2,3,4,5,6,1])

//===============================================================    

// 8. Rotate an array by k times            //output : [ 2, 3, 4, 1 ]

let array8 = [1,2,3,4];
let k=3;

let rotate = function(array8,k)
{
    for(var i=0;i<k;i++)
    {
        let s1=array8.unshift(array8.pop());
     }
     console.log(array8);
};
rotate(array8,k);
                                          

//------------------------------------------------------------------------
                                                   // output = [ 2, 3, 4, 1 ]
//IIFE

(function rotate(array,k)
{
    for(var i=0;i<k;i++)
    {
        let s1=array.unshift(array.pop());
     }
     console.log(array);
})([1,2,3,4],3)

//==================================================================================================