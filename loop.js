
//1.example of for loop ...

for(let x=1; x<=10; x++){
    console.log("x ="+x);
 
}

//1.example of for of loop ...
const numbers =[1,2,3,4,5];
for( x of numbers){
    console.log(x*x);
}

//1.example of for in loop ...
const object={
    name:"sumon",
    roll: 1,
    department : "computer"
}
for(let x in object){
    console.log(x +"="+object[x]);
}