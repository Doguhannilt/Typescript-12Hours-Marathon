/* 
type User = {
    email: string,
    userId: number
}
*/


interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: number
}


const doguhan: User = {dbId:31201,email:"asd@gmail.com",userId:123123}


function sayHello(s: string):void{
    console.log(s);
}

interface UserExample{
    name: string,
    surname: string,
    sayHello: (s: string) => void;
}


interface Admin extends User{
    // ! Inheritance
}