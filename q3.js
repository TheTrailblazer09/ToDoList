// Q3). Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.
// Example 1:
//   Input: {0, 1, 2, 0, 1, 2}
//   Output: {0, 0, 1, 1, 2, 2}
// Example 2:
//   Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
//   Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} 


let arr=[1,0,2,0,1,2];
let count1 = 0;
 let count2 = 0;
  let count3 = 0;

for(let i=0 ; i<count1.length ;i++){
   if(arr[i]=0){
       count1 +=1;
       }
   else if(arr[i]=1){
       count2 +=1;
       }
   else if(arr[i]=0){
       count3 +=1;
       }
for(let j=0 ; j<=count1;j++){
array1[j]=1;
}
for(let k=0 ; k<=count2;k++){
array2[k]=1;
}
for(let l=0 ; l<=count3;l++){
array3[l]=1;
}
let finalarr=[...array1]+[...array2]+[...array3]
console.log(finalarr)
}