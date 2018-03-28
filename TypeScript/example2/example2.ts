//@author : leonardobellomi@gmail.com
//@version 1.0 03-27-2018
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Dottor", lastName: "Souper" };

document.body.innerHTML = greeter(user);
