//@author : leonardobellomi@gmail.com
//@version 1.0 03-27-2018
function hello_world(user) {
	return "Hello World by " + user;
}
let user = "Dottor Souper";

document.body.innerHTML = hello_world(user);
