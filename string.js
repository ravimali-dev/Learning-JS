//Given a string s, return the reverse of the string.
let s = "hello";


let arr = s.split("");

let left = 0;
let right = arr.length - 1;

while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr.join(""));

