//@author : leonardobellomi@gmail.com
//@version 1.0 03-27-2018
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Dottor", "S.Q.L.", "Souper");
document.body.innerHTML = greeter(user);
