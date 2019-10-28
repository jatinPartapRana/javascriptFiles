let myTodos = {
    day : "Monday",
    meetings: 0,
    meetDone: 0, 

    addMeeting: function(num){
        this.meetings = this.meetings + num;
        console.log(this.meetings);
    }
}

myTodos.addMeeting();

