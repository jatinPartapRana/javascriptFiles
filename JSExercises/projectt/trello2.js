const days = ['mon','tues','wed','thurs','fri','sat','sun'];
// let sayHello = function(){
//     console.log("greetings");
// }
// days.forEach(sayHello);
days.forEach(function(day, index){ // the first element is the element itself and 2nd is the index
    console.log(`index: ${index} , day : ${day}`);
})



