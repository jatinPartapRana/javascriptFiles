const myTodos = [];

myTodos.push('Buy Bread');
myTodos.push('Record videos for youtube');
myTodos.push('Go to Gym');

myTodos.forEach(function(todo, index){
    console.log(`your task number is ${index + 1} is : ${todo}`)
})