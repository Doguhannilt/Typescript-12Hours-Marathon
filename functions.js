function addTwo(number) {
    return number + 2;
}
addTwo(4);
// ! Syntax of function:  
/*
    function variableName(value: valueType): outcome Type {
    }
*/
// ! This is problematic function because Typescript doesn't know what type of value we want 
function getUpperWrong(val) {
    return val.toUpperCase();
}
// Instead of this one, you may follow:
function getUpperFixed(val) {
    return val.toUpperCase();
}
// ! Another way of creating a function
var loginUser = function (email, name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// false: may not be used 
