// Q1 series of Prime no. 
// 
// const primeNo = (num) => {
//   for(let i = 2 ; i<num ; i++){
//     let count  = 0;
//     for(let j = 2; j<=i;j++){    
//       if(i%j == 0){    
//         count = count +1;
//       }
//     }
//     if(count == 1 ){
//       console.log(i);
//     }
//   }
// }
// const  num =   60;
// primeNo(num);


//Q2  Remove array dublicate and sort.

// const arr = [2,6,4,2,3,9,6,4,9,6];

// let  length = arr.length;
// let newArr = [];

// for(let i = 0 ; i< length ; i++){

//   if(newArr.indexOf(arr[i]) === -1){
//     newArr.push(arr[i]);
//   }
// }
   
// console.log(newArr.sort());
  
//  console.log(newArr.indexOf(8));



  
 
// Q3 plandrom check.


// let num = 181;
//  let result =  num.toString().split("").reverse().join("");
//  console.log(result)
//  if(result == num ){

//     console.log("it is plandrom no .")
//  }
//  else{
//     console.log("it is  not plandrom no .")

//  }

// Q4  marge 2 array and remove duplicate

let arr1  = [1,2,6,6,5,5];
let arr2 =  [1,5,7,7,7,5];

let result =  arr1.concat(arr2).sort();
 let seter =  new Set(result);
console.log(seter);









//  let arr =   arr1.concat(arr2);
//  console.log(arr);
//  let length = arr1.length;
//  let result = [];

//  for(let i = 0 ; i<length;i++){
//   if(result.indexOf(arr1[i] === -1)){
//     result.push(arr1[i]);
//   }
//  }
//  console.log(result);


