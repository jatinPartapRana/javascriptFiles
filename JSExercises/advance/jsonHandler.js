const student = {
        name: "John",
        age : 23,
        isActive : true
}

//convert this object into a string to be stored into local storage.
// converts json into string
const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString);
localStorage.setItem('student', studentObjToString);

const stringToJson = JSON.parse(studentObjToString);
console.log(stringToJson.name);