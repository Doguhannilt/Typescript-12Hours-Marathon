// ? Definition of Union Type

/*The first way to combine types you might see is a union type. 
A union type is a type formed from two or more other types,
 representing values that may be any one of those types. 
We refer to each of these types as the union’s members.*/

function printId(id: number | string) {
    console.log("Your Id" +  id);
}

// It's okay to write number or string inside of id value
printId(123);
printId("ADFSSA");


/* Let's say you want to use a method that is only suitable for string but not for integer
then you can't use that method in function*/

function saySomething(s: number | string){
    s.toUpperCase() // ! <-- The method is not available for number
}

// instead of this one, you may use

function saySomethingFixed(s: number | string){
    if (typeof s === "string"){
        console.log(s.toUpperCase());
    } else{
        console.log(s);
    }
}
