const aa = "ss";

const numbers = ['One','two','three','four','five'];
// start of the array
let shiftingElement = numbers.shift(); // deletes the first element in the array
console.log(shiftingElement);
console.log(numbers);

numbers.unshift('six'); // inserts value at the start of the array.

//end of the array
numbers.pop(); // deletes the eleement at the end

numbers.push(); //adds the number at the end

// middle of thr array

numbers.splice(2, 1, 'SOMETHING'); // THIS method takes first argument as the 
                                    // the index of the array
                                    //2nd argument as the no of elemments to delete from the 1st argument index
                                    // 3 rd agument is the value to put in palce of the deleted value.
                                    

