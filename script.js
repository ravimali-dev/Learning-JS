// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result









function removChar(str){

   let result = str.slice(0,-3);
   return result;
}
console.log(removChar("asdfgg"))