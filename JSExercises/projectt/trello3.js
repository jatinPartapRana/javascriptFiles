let toTodos = {
    day : "Monday",
    meetings: 0,
    meetDone: 0
}
cd 
let addMeeting = function(todo, meet = 0){
    toTodos.meetings = toTodos.meetings + meet;
}

let meetingDone = function(todo, meet =0){
    toTodos.meetDone = toTodos.meetDone - meet;
}

let resetDay = function(todo){
    todo.meetings = 0;
    todo.meetDone = 0;
}
addMeeting(toTodos, 2);



console.log(toTodos);