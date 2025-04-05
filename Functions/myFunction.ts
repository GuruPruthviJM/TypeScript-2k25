function addTwo(num:number){
    return num+2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function singUp(name: string, email: string, isPaid: boolean): boolean{
    return true
}

let loginUser = (name:string, email: string, isPaid: boolean=false)=>{
    return true
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

let myVal=addTwo(5)
getUpper("guru")
loginUser("h", "h@h.com")

export {}