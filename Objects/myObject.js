"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "guru", isPaid: true, email: "guru@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 699 };
}
function createUserWithAlias(user) {
    return { name: "Guru", email: "g@gmail.com", isActive: true };
}
createUserWithAlias({ name: "Guru", email: "g@gmail.com", isActive: true });
var myUser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.name = "g";
