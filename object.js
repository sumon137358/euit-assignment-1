//1.example of  entries method() in object...
// 1
const nums ={1:"a" ,2: "b" , 3: "c"};
for( let [keys,value] of Object.entries(nums)){
    console.log("keys :"+keys +" value :"+ value);
}

// 2
const nums1 ={1:"a" ,2: "b" , 3: "c"};
console.log(Object.entries(nums1));

//2.example of  hasOwn method() in object...
const fruits = ['Apple', 'Banana','Watermelon', 'Orange'];
const result2 =Object.hasOwn(fruits, 4);
const result3 =Object.hasOwn(fruits, 3);
console.log(result2);
console.log(result3);

//2.example of  keys method() in object...

// 1
const object1 = {
    a: 'sumo',
    b: 42,
    c: "sjfs"
  };
  
  console.log(Object.keys(object1));


//3.example of  value method() in object...
const object2 = {
    a: 'sumo',
    b: 42,
    c: "sjfs"
  };
  
  console.log(Object.values(object1));


//4. merging two object using spread operator in object...
const object3 ={
    name:"shumon",
    roll: 137358,
    department:"computer"
};
const object4 ={
    1:"a",
    food:"pizza",

};
console.log({...object3,...object4});


