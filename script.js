//Count even and odd numbers

let arr = [1,2,3,4,5,6];
let even = 0;
let odd = 0;

for(let i=0; i<arr.length; i++){
    if(i%2==0){
        even++;
    }else{
        odd++
    }
}
// console.log(even);
// console.log(odd);

//Find average of array

let arr1 = [2,4,6,8];
let average;
let sum = 0;

for(let i=0; i<arr1.length; i++){
     sum += arr1[i];
    average = sum/arr1.length;
}
console.log(average);

//Count how many times a number appears

let arr2 = array = [1,2,2,3,2,4];
let target = 2;
let numAppear = 0;
for(let i=0; i<arr2.length; i++){
    if(arr2[i]==target){
        numAppear++
    }
}
console.log(numAppear);