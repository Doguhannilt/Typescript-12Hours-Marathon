var degree;
(function (degree) {
    degree[degree["high"] = 0] = "high";
    degree[degree["middle"] = 1] = "middle";
    degree[degree["low"] = 2] = "low";
})(degree || (degree = {}));
var student = degree.high;
if (student === degree.high) {
    console.log("You are high");
}
else if (student === degree.middle) {
    console.log("You are middle");
}
else {
    console.log("You are low!");
}
