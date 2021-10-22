

let array = [1,2,3,4,5,7]
console.log("Array original: " + array);
let myArray= [...array]
for (let i = 0; i < myArray.length; i++) {
    myArray[i]= myArray[i] + 1;
  
}
console.log("Array final modificado: " + myArray);
