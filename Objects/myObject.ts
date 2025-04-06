const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}
let newUser={name:"guru", isPaid:true, email: "guru@gmail.com"}
createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 699}
}

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUserWithAlias(user: User):User{
    return {name: "Guru", email:"g@gmail.com", isActive:true}
}

createUserWithAlias({name: "Guru", email:"g@gmail.com", isActive:true})

type UserReadOnly = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
}

let myUser: UserReadOnly = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.name="g"

export {}