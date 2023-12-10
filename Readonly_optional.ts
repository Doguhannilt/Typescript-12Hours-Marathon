// ! Readonly is used if there is a value that we do not want to be changed.
// ! We use question mark if its optional
type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credcartDetails?: number
}

let myUser: User = {
    _id: "12312312312321",
    name: "h",
    email: "dfs@gmail.com",
    isActive: true
}

console.log(myUser);







