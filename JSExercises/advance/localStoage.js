// local stoarge is key value pair stoage system
localStorage.setItem('todo','Buy coffee');
localStorage.setItem('hero','thor');
let myHero = localStorage.getItem('hero');
console.log(myHero);
myHero = localStorage.removeItem('hero');
console.log(myHero);

localStorage.clear(); // deletes all the keys or clears the local storage.
