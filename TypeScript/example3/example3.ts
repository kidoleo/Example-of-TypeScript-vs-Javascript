//@author : leonardobellomi@gmail.com
//@version 1.0 03-27-2018
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Dottor", "S.Q.L.", "Souper");

document.body.innerHTML = greeter(user);
