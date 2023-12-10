enum degree {
    high, // 0 to Z+
    middle,
    low
}


let student: degree = degree.high;


if(student === degree.high){console.log("You are high");}
else if(student === degree.middle){console.log("You are middle")}
else{console.log("You are low!");}

