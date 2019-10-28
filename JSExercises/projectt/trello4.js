const newTodos = [{
    title :"Buy bread",
    isDone:false
},{
    title:"go to gym",
    isDone: false,
},{
    "title":"record video",
    "isDone":true
}];

//Method 1

//this findIndex accepts the call back function and returns the index 
//on the basis of the matched condition .
// const index = newTodos.findIndex(function(todo, index){
//     return todo.title === "go to gym";
// });
// console.log(index);


const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo, findIndex){
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    return myTodos[index];
};


let printMe = findTodo(newTodos, "go to gym");
console.log(printMe);


//Method 2: 
const findTodo2 = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    return titleReturned;
};


let printMe2 = findTodo2(newTodos, "go to gym");
console.log(printMe2);