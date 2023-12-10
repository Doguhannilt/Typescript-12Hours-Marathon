let greetings: string = "Hello World!";
console.log(greetings);

// ? number
let userId: number = 3334455;
// ! It's not a good practice because we can assign a float number or integer number
// ! You don't need to assign a type for each variable that you use, it depends on your task

// ? boolean
let isLoggedIn: boolean = false;

// ? any
let hero; // ! It's an any example, Typescript can't assign anything because you didn't specify anything!
function getHero(){
    return "thor"
}
hero = getHero()
//--------------------------------------------//
let hero: string; // Now, you have assigned variable and we know what type of variable will be come out
function getHeroString(){
    return "thor"
}
hero = getHeroString()



export{}