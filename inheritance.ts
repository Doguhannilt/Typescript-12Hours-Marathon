// ? Inheritance

class subUser extends user{
    constructor(public isActive: boolean, private id: number ){
        super("email","name")
    }
}

let subUserAdmin = new subUser(true,123213)

//-------------------------------------------------------------//

class count {
    protected _courseCount: number = 0
    constructor(public name: string, public surname: string) {       
            console.log(this.name, this.surname);
            
    }
}

class Count extends count{
    constructor(public isPaid: boolean){
        super("DefaultName", "DefaultSurname");
        this.isPaid = isPaid
        
    }
    
    increaseCount(isPaid:boolean) {
        if(isPaid === true){
            this._courseCount += 1
        } 
        
    }

}

let member = new Count(false)