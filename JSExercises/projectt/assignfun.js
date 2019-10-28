let getmyGrade = function(currentMarks, currentMarks){
    let myPercentage = (currentMarks/currentMarks)*100;
    let grade = '';
    if(myPercentage > 90){
        grade = 'A';
    }
    else if(myPercentage > 80 && myPercentage < 90){
        grade = 'A-';
    }
    return grade;
}

let gd = getmyGrade(90,100);
console.log(gd);