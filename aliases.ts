type User = {
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user:User): User{
    console.log(user);
}

let newUser = createUser({name:"Doguhan",email:"doguhannilt@gmail.com",isActive:true})


// Document

type Point = {
    x: number,
    y: number
}

function printCoord(pt:Point) {
    console.log("X" + pt.x);
    console.log("Y" + pt.y);
}

export{}