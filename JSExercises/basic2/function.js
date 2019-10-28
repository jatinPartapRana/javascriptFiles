let sayHello = function(){
    console.log("Greeting message for user");
    console.log("Hey user");
}

let helloUser = function(name){
    console.log("Greeting message for user");
    console.log(`Hey ${name}`);
}

let fullNameMaker = function(firstName, lastName){
    console.log("welcome");
    console.log(`happy to have you , ${firstName} ${lastName}`)

}


let myAdder = function(num1 , num2){
    return (num1+ num2);
}
let result = myAdder(5,6);
console.log(result);

sayHello();
fullNameMaker('jatin', 'rana');

let myMutiplier = function(num1 , num2){

    return num1*num2;
}

console.log(myMutiplier(5,6));


let guestUser = function(name ='unname', coursrCount =0){  // default parameters
    return 'hello' + name +'your coursre count is' + coursrCount;
}
console.log(guestUser());


