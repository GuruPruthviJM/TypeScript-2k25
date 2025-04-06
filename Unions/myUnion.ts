let score: number | string = 33

type User = {
    name: string;
    id: number
}

type Admin = {
    userName: string;
    id: number
}

let hitesh : User | Admin = {
    name: "Guru",
    id: 1234
}

hitesh = {userName : "Pruthvi", id: 1456}

// function getDbId(id: number|string){
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("3")

function getDbId(id: number|string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    if(typeof id === "number"){
        id+2
    }
}

// arrays

const data: number[] = [1, 2, 3, 4]
const data2: string[] = ["one", "two", "three"]
const data3: (number|string)[] = [1, "two", 3, "four"]

let seatAllotment: "aisle"|"middle"|"window"

seatAllotment = "aisle"
// seatAllotment = "crew" //we can't assign this value