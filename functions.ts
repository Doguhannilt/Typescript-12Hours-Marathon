function addTwo(number: number) :number{
    return number + 2
}
addTwo(4)

// ! Syntax of function:  
/* 
    function variableName(value: valueType): outcome Type {
    }
*/


// ! This is problematic function because Typescript doesn't know what type of value we want 
function getUpperWrong(val){
    return val.toUpperCase()
}

// Instead of this one, you may follow:
function getUpperFixed(val: string):string{
    return val.toUpperCase()
}

// ! Another way of creating a function
let loginUser = (email:string, name:string, isPaid: boolean = false) => {}
                                                // false: may not be used 

// ! This is also problematic beacuse we can't assign the outcome of function only writing
// ! number or boolean, we need to use something else.
function getValue(myVal: number){
    if(myVal > 5){
        return true
    } else{
        return "200 Ok"
    }
}

const getHello = (s : string): string => {
    return "Hello!"
}

// ! If a function doesn't return anything, then you need to use void
function consoleError(errmsg : string) :void {
    console.log(errmsg);
    // return nothing, just logging.
}