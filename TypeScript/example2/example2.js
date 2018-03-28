//@author : leonardobellomi@gmail.com
//@version 1.0 03-27-2018
function greeter(person) {
   return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Dottor", lastName: "Souper" };
document.body.innerHTML = greeter(user);
