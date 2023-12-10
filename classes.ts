// ! Standard Type
class User {
    readonly email:string
    name?:string
    constructor(email: string, name:string){
        this.email = email
        this.name = name
    }
}

const dogu = new User("asdasd@", "Dogu")

// ! Private Type

class UserwithPrivate {
    private readonly email:string
    name?:string
    constructor(email: string, name:string) {
        this.email = email
        this.name = name
    }
}

// ! Public Type

class UserwithPublic {
    public readonly email:string
    name?:string
    constructor(email: string, name:string) {
        this.email = email
        this.name = name
    }
}

// Make it Better

class user {
    readonly city: string = "Istanbul"
    constructor(public email:string,
                private name: string) {    
    }
} 