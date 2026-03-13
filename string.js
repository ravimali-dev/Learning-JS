//Given a string s, return the reverse of the string.
// let s = "hello";


// let arr = s.split("");

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
// }

// console.log(arr.join(""));

//string is palindrome or not

// let s = "Ravi";

// let left = 0;
// let right = s.length - 1;
// let isPalindrome = true;

// while (left < right) {
//     if (s[left] !== s[right]) {
//         isPalindrome = false;
//         break;
//     }

//     left++;
//     right--;
// }

// console.log(isPalindrome);

//Given a string s, find how many times each character appears in the string.


let s = "banana";
let freq = {};

for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (freq[char]) {
        freq[char]++;
    } else {
        freq[char] = 1;
    }
}

console.log(freq);