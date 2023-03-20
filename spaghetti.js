console.log("test");

const NUMBERLIST=[1, 1];

function Fib(){
    var NUMBERLIST_TEXT = NUMBERLIST;
    Position1 = 0
    Position2 = 1
    // This needs to go into a 10x For Loop //
    for (let i = 0; i < 10; i++) {
        Math = NUMBERLIST[Position1] + NUMBERLIST[Position2]
        NUMBERLIST.push(Math)
        Position1 = Position1 + 1
        Position2 = Position2 + 1
    }
    // this sends it to the html //
    document.getElementById("Text1").innerHTML = "not loading xdd";
    document.getElementById("Text1").innerHTML = NUMBERLIST_TEXT;

};

Fib();
