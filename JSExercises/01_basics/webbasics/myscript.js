//document.title = 'I got changed';

// const myPElements = document.querySelector('p');
// myPElements.textContent = 'using js';

const myPElements = document.querySelectorAll('p');
myPElements.forEach((p)=>p.textContent = 'converted');
    //p.remove();) // to remove the elements
//myPElements.textContent = 'using js';

const myNewPara = document.createElement('p');
myNewPara.textContent = 'I was added via js';

document.querySelector('body').appendChild(myNewPara);
