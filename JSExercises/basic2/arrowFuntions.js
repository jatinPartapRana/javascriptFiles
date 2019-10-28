const sayHello = function(name){
    return "hey  there" + name;
};

const sayHello2 = (name) => `hey there ${name} !`

console.log(sayHello(" sammy"));

const todos = [{
    title: "Buy Bread",
    isDone:true
},{
    title:" go to gym",
    isDone: false
},{
    title: "record vidoe",
    isDone:true
}]
// filter gets the elements which satisfy a particular condition.
const thingsDone = todos.filter((todo)=> todo.isDone === true);


console.log(thingsDone);


const thingsNotDone = todos.filter((todo)=>todo.isDone === false);
thingsNotDone.forEach((element, index)=> console.log(element.title));