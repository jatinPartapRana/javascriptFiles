// document.querySelector("#myForm").addEventListener("change", (event) =>{
//     console.log(event.target.value);
// })

let myFunction= function (){
   let myValue =  document.getElementById("myForm").value;
   if(isNaN(myValue) || myValue <  2 || myValue > 20){
       console.log('not a valid input');
   }
   else{
       console.log('input OK');
   }
}

//form validation
document.querySelector('.form').addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realName.value);
    event.target.username.value = '';

})