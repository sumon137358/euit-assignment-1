
// 1.example of  concat method() of array...
let array =[1,2,3,4,5];
let array2 =[6,7,8,9];
let connectAll =array.concat(array2);
console.log(connectAll);

//2.example of  every method()  of array...
const numbers = [45, 4, 9, 16, 25];
let over18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 15;
}
console.log(over18);


//3.example of  fill method() in array...
let array1 =[2,4,9, 6];
 
console.log(array2.fill(3,2,4));
//  output : [2, 4, 3, 3] 


console.log(array1.fill(6,2));
// output :[1, 1, 6, 6] 

console.log(array1.fill(1));
// output : [1, 1, 1, 1]


//4.example of  filter method() in array...
let number =[1,2,3,4,5,6];
let result =number.filter(x => x>4);
console.log(result);


//5.example of  find method() in array...
let number2 =[1,2,3,4,5,6];
let result1 =number.find(x => x>4);
console.log(result1);


//6.example of  findIndex method() in array...
const array3 = [5, 12, 8, 130, 44];
console.log(array3.findIndex((num) => num>13));

//7.example of  forEach method() in array...
const games =["football","cricket","volleyball"];
games.forEach((index,value) =>{
    console.log(index,value); 
})


//8.example of  from method() in array...
const num ="hello";
const result5 =Array.from(num); 
console.log(result5);

// 2
const result6 =Array.from([1, 2, 3], (x) => x + x); 
console.log(result6);


//9.example of  includes method() in array...
const fruits = ["Banana", "Orange", "Apple"];
const result7 =fruits.includes("Banana");
console.log(result7);

//10.example of  isArray method() in array...
const fruits2 = ["Banana", "Orange", "Apple"];
const fruits3 = {fruits1:"banana", fruits2:"orange"};
console.log(Array.isArray(fruits2));
console.log(Array.isArray(fruits3));


//11.example of  join method() in array...
const num2 =[1,2,3]

console.log(num2.join("join"+ " =")); 


//12.example of  map method() in array...
let number5 =[1,2,3,4,5,6];
let result9 =number.map(x => x*2);
console.log(result9);

//13.example of  pop method() in array...
let number6 =[1,2,3,4,5,6];
number6.pop();
console.log(number6);

//14.example of  push method() in array...
let number7 =[1,2,3,4,5,6];
number7.push(10);
console.log(number7);

//15.example of  reverse method() in array...
let number8 =[1,2,3,4,5,6];
number8.reverse()
console.log(number8);

//16.example of shift  method() in array...

let number9 =[1,2,3,4,5,6];
number9.shift();
console.log(number9);

//17.example of unshift  method() in array...
let number10 =[1,2,3,4,5,6];
number10.unshift(12);
console.log(number10);

//18.example of slice  method() in array...
let number11 =[1,2,3,4,5,6];
const result10 =number11.slice(2,5);
console.log(result10);


//19.example of slice  method() in array...
const array4 =[12, 5, 8, 1, 4];
const result11=array4.some((x) => x > 33);
console.log(result11);

//20.example of slice  method() in array...

const number12 =["b","c","a","q","f"];
const result12 =number12.sort();
console.log(result12);

//21.example of splice  method() in array...
const array5 =[12, 5, 8, 1, 4];
array5.splice(1,2);
console.log(array5);