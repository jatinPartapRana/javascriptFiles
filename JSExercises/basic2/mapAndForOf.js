var john = {
    name: "I am john",
    age: 24,
    isActive: true
}

var mary = {
    name: 'I am mary',
    age: 23,
    isActive: true
}

var sam = {
    name : ' I am Sam',
    age : 29,
    isActive : false
}


let users = new Map();
users.set('john',john);
users.set('mary',mary);
users.set('sam',sam); 

console.log(users.size);
console.log(users.get("john"));
console.log(users.keys());
console.log(users.values());


// for OF Syntax

for(const key of users.key()){
    console.log(key);
}

// for(const value of users.values()){
//     console.log(value);
// }


// we can get the key and the vale in  an array
for(const [key, value] of users.entries()){
    console.log(key + '=' + value.name);
    //convert the above line in string literals
}
// here in the call back function the 1st parameter is the value and 2nd is the key.
users.forEach((value , key)=>{
    console.log(key + "=" + value.name);
})


// if we pass the array of array objects in map it automatically converts
// the array into the key value pair.
var arrOfArr = [['one','1'],['two','2']];
var newMap = new Map(arrOfArr);
console.log(newMap);



