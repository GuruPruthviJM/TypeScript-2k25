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

export {}