const User = {
    name: "Doguhan",
    email: "Doguhannilt@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: "Doguhan", isPaid:false})

// ! To make it better
function createCourse():{name: string, price:number}{
    return{name: "reactjs",price:300}
}