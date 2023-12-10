// Reference
let score: Array<number> = []
const names: Array<string> = []

// ? Core
function identityOne(val:boolean | number): boolean | number {
    return val
}

function identityTwo(val:any): any {
    return val
}

function identityThree<Type>(val:Type): Type {
    return val
}

identityThree(3)

function identityFour<T>(val:T):T{
    return val
}

// Arrow Function with Generics
const identity = <T>(arg: T): T => {
    return arg;
};

// Tuple with Generics
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
