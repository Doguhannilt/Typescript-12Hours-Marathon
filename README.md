<pre>
<h1>Typescript</h1>
<lu>
    <li>Typescript is a tool based on Javascript</li>
    <li>Typescript gives you much more space and more security</li>
</lu>

<h3>Typescript to Javascript</h3>
<p>If you want to convert your Typescript code into Javascript code then:</p><br>
<code>tsc .\filename.ts</code>

<br>

<h3>Types</h3>
<lu>
    <li>You can use any types in Typescript, it's so similar to C# and Java.</li>
</lu>
<h3>Syntax of Types</h3>
<code>let variable: string = "value";</code>

<h3>Functions</h3>
<lu>
    <li>You should assign the type of value and outcome</li>
</lu>
<h3>Syntax of Functions</h3>
<code>function variableName(value: valueType): outcome Type {}</code>
<code>const variableName = (value: valueType): outcome Type => {}</code>

<h3>Functions with objects with Syntax</h3>
<code>function variableName(){value: valueType, value1: valueType2}{return...}</code>
<code>function createCourse(){name:string,price:number}{return{name:"Doguhan",price:300}}</code>

<h3>Readonly and Optional</h3>
<lu>
    <li>Readonly: Readonly is used if there is a key that we do not want to be changed.</li>
    <li>Question Mark: Use question mark if key is optional</li>
</lu>

<h3>Array Syntax</h3>
<code>const variableName: variableType[] = []</code>
<p> Also you can use 'const variableName: Array<variableType> = []</p>

<h3>Union Type</h3>
<p>Allow you to use two or more type</p>
<code>function saySomethingFixed(s: number | string){
    if (typeof s === "string"){
        console.log(s.toUpperCase());
    } else{
        console.log(s);
    }
}</code>
<p><strong>Warning: </strong> Let's say you want to use a method that is only suitable for string but not for integer
then you can't use that method in function* </p>


<h3>Tuples</h3>
<lu>
    <li>A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.</li>
</lu>

<h3>Tuple Syntax</h3>
<code>type StringNumberPair = [string, number];</code>

<h3>Enums</h3>
<lu>
    <li>Enums, short for "enumerations," are used in programming languages to define a set of named constant values. They are particularly useful when you have a fixed set of related values that represent distinct categories, and you want to use those values in a more readable and maintainable way in your code.</li>
    <li>Enums represent named constant values.</li>
    <li>They are used to group values of a specific type.</li>
    <li>Enums enhance code readability and ease of understanding.</li>
    <li>Enum members are associated with numerical values (starting from 0 by default).</li>
    <li>Numerical values can be explicitly assigned to enum members.</li>
    <li>Enum types provide type safety in languages like TypeScript with static typing.</li>
    <li>They assist in organizing control flow with switch statements or if-else chains.</li>
    <li>Programmers can set and compare specific values using enums.</li>
    <li>Enum types reduce the likelihood of errors when determining valid values in a set.</li>
</lu>

<code>
enum degree {
    high,
    middle,
    low
}


let student: degree = degree.high;


if(student === degree.high){console.log("You are high");}
else if(student === degree.middle){console.log("You are middle")}
else{console.log("You are low!");}
</code>

<h3>Interface</h3>
<ul>
    <li>Interfaces define contracts for object structures in programming.</li>
    <li>They declare a set of methods, properties, and events that a class or object must implement.</li>
    <li>Interfaces facilitate code organization and enforce a consistent structure across different objects.</li>
    <li>They support the concept of multiple inheritance by allowing a class to implement multiple interfaces.</li>
    <li>Interfaces promote code reusability and maintainability by providing a clear separation of concerns.</li>
    <li>They enable strong typing in languages like TypeScript, ensuring that objects adhere to a specific structure.</li>
    <li>Interfaces are used to create abstractions and define the shape of objects without specifying their implementation.</li>
    <li>They play a crucial role in designing modular and scalable software architectures.</li>
    <li>Interfaces enhance collaboration among developers by providing clear specifications for interacting components.</li>
    <li>They are an integral part of object-oriented programming for designing robust and scalable systems.</li>
    <li>For inheritance, you need to use "extends" method in your interface</li>
</ul>

<h3>Interface Syntax</h3>

<code>
interface User {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: number
}
</code>

<h3>Classes</h3>

<h4>Standart</h4>

<code>
class User {
    email:string
    name:string
    constructor(email: string, name:string){
        this.email = email
        this.name = name
    }
}

const dogu = new User("asdasd@", "Dogu")
</code>

<h4>Private Class</h4>

<code>
class UserwithPrivate {
    private readonly email:string
    name?:string
    constructor(email: string, name:string) {
        this.email = email
        this.name = name
    }
}

</code>

<h4>Public Class</h4>

<code>
class UserwithPublic {
    public readonly email:string
    name?:string
    constructor(email: string, name:string) {
        this.email = email
        this.name = name
    }
}
</code>

<h4>Better way - Class <h4>

<code>
class user {
    constructor(public email:string,
                private name: string) {    
    }
} 
</code>

<h4> Getter&Setter - Class </h4>

<code>
class user {
    private _courseCount = 1
    readonly city: string = "Istanbul"
    constructor(public email:string,
                private name: string) {    
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this.courseCount
    }

    set courseCount(courseNum){ // ? There is no return type.
        if (courseNum <= 1) {
            throw new console.error("Course count should be more than 1");
            
        } else{this._courseCount= courseNum}
    }
} 
</code>

<h4>Inheritance - Class</h4>
<code>
class subUser extends user{
    constructor(public isActive: boolean, private id: number ){
        super("email","name")
    }
}

let subUserAdmin = new subUser(true,123213)
</code>

<h4>Protected - Class</h4>

<code>
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
</code>


<h4>Interface and Classes</h4>
<code>
interface options {
    cameraMode: string,
    filter:string,
    burst:number
}

// ! Create a class and implement options protocol
class Instagram implements options{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        // You can add more but not less than options protocol
        public isPhone: string
    ){}
}
</code>

<h4>Abstract Classes</h4>
<code>
// ! BLUEPRINT
abstract class takePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {
        
    }

    abstract getSepia(): void
}

// ! We can't use an abstract class to create a object because this is BLUEPRINT
// const dogu = new takePhoto("Self","Gray")


class InstagramforAbstract extends takePhoto {
    getSepia(): void {
        console.log("Helloooo");
        
    }
}

const dogu = new InstagramforAbstract("Self","Gray")
</code>

<h3>Generics</h3>
<ul>
    <li>Generics provide a way to create flexible and reusable code in programming.</li>
    <li>They allow the creation of functions and data structures that can work with different data types.</li>
    <li>Generics enhance code abstraction by enabling the definition of algorithms and structures without committing to a specific type.</li>
    <li>They ensure type safety by allowing developers to specify the type of data a generic function or class will work with.</li>
    <li>Generics promote code efficiency by avoiding code duplication and supporting a single implementation for multiple types.</li>
    <li>They are widely used in languages like TypeScript and Java to create generic classes, interfaces, and functions.</li>
    <li>Generics enable the creation of flexible and extensible APIs that can adapt to various data types.</li>
    <li>They improve code readability and maintainability by making functions and classes more versatile and adaptable.</li>
    <li>Generics are essential in designing frameworks and libraries that need to handle diverse data structures.</li>
    <li>They are a key feature in modern programming languages, providing a powerful tool for writing generic and reusable code.</li>
</ul>

<h3>Generics Syntax</h3>
<code>
function identityFour<T>(val:T):T{
    return val
}
</code>

<h3> Additional Syntax for Generics </h3>
<code>
// Arrow Function with Generics
const identity = <T>(arg: T): T => {
    return arg;
};

// Tuple with Generics
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
</code>

<h3> In statement </h3>

<code>
  
interface user{
    name: string,
    email: string
}
interface admin{
    name: string,
    email:string,
    isAdmin: boolean
}

function isAdminAccount(account:user | admin) 
{
       if ("isAdmin" in account) {
            return account.isAdmin
       }
}
</code>
</pre>
