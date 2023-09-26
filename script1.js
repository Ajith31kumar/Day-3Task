//question 1
//How to compare two JSON have the same properties without order
//let obj1 = {name:"person1", age:5}
//ler obj2 = {age:5 , name:"person1"}

let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var assumption=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            assumption=false;
            break;
        }
    }
}
else {
    assumption=false;
}
console.log(assumption);
//output:
//true
