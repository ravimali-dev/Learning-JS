// //Count even and odd numbers

// let arr = [1,2,3,4,5,6];
// let even = 0;
// let odd = 0;

// for(let i=0; i<arr.length; i++){
//     if(i%2==0){
//         even++;
//     }else{
//         odd++
//     }
// }
// // console.log(even);
// // console.log(odd);

//Find average of array

let arr1 = [2,4,6,8];
let average;
let sum;

for(let i=0; i<arr1.length; i++){
     sum += arr1[i];
    average = sum/arr1.length;
}
console.log(average);

// //Count how many times a number appears

// let arr2 =  [1,2,2,3,2,4];
// let target = 2;
// let numAppear = 0;
// for(let i=0; i<arr2.length; i++){
//     if(arr2[i]==target){
//         numAppear++
//     }
// }
// console.log(numAppear);

// Reverse an array

// let arr = [1,2,3,4];
// let reverseArr = [];

// for(let i=arr.length-1; i>=0; i--){
//     reverseArr.push(arr[i])
// }
// console.log(reverseArr);

// Find second largest element

// let arr = [10,5,8,20,15];

// let largest = arr[0];

// // largest find
// for(let i=0; i<arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }

// console.log("Largest:", largest);

// let secondLargest = arr[0];

// second largest find
// for(let i=0; i<arr.length; i++){
//     if(arr[i] < largest && arr[i] > secondLargest){
//         secondLargest = arr[i];
//     }
// }

// console.log("Second Largest:", secondLargest);

// Check array sorted hai ya nahi

// let arr = [1,2,3,4,5,6];
// let arrshortes;
// for(let i=0; i<arr.length-1; i++){
//        if(arr[i] > arr[i+1]){
//         arrshortes = false
//        }else{
//         arrshortes = true;
//        }
    
// }
// console.log(arrshortes)


 //remove duplicates
// let arr2 =  [1,2,2,3,4,4,5];
// let result = [];
// for(let i=0; i<arr2.length; i++){
//     if(arr2[i] !== arr2[i+1]){
//         result.push(arr2[i]);
//     }
// }
// console.log(result);

//Find maximum difference

// let arr = [2,7,3,10];
// //output = 8;
// let maxdiff = 0;

// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         let diff = arr[j] - arr[i];
//         if(diff > maxdiff){
//             maxdiff = diff;
//         }
//     }
// }
// console.log(maxdiff);

//Find missing number

// 

//Move all zeros to end

// let arr = [1,0,2,0,3,4];

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] === 0){

//         for(let j = i + 1; j < arr.length; j++){

//             if(arr[j] !== 0){

//                 // swap
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;

//                 break;
//             }

//         }

//     }

// }

// console.log(arr);

let arr = [1,2,2,3,3,3];


// for(let i=0; i<arr.length; i++){
//     let count = 0;
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] == arr[i]){
//             count++;
           
//         }
//     }
//     console.log(arr[i],"count is ",count)
// }

for(let i=0; i<arr.length; i++){

    let count = 0;   // reset

    for(let j=0; j<arr.length; j++){

        if(arr[i] == arr[j]){
            count++;
        }

    }

    console.log(arr[i], "count is", count);

}