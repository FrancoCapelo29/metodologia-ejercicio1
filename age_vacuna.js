console.log("Enter your age:");
let age;
age= 6;
let Age;
Age= 10;
let agemay;
agemay= 65;
let permitido;
permitido= "successful";
let denegado;
denegado= "Access denied";
if(age<Age && Age<agemay){
    console.log("Access allowed, get your vaccine: " + permitido);
}
else{
    console.log("Incorrect minimum/maximum age: " + denegado);
}