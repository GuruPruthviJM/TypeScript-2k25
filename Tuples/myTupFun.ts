let tUser : [string, number, boolean]

tUser = ['John Doe', 30, true] // it should be in the order of string, number, boolean as per above

let rgb : [number, number, number] = [255, 0, 0] // it should be in the order of number, number, number

type User = [number, string]

const newUser: User = [1, 'g@gmail.com'] // it should be in the order of number, string
newUser[1] = 'john.doe@gmail.com' // changing the email address
// newUser.push(true) // adding a new property to the array

export {}