console.log("test");

const DAYS=[" Monday"," Tuesday"," Wednesday"," Thursday"," Friday"," Saturday"," Sunday"];

AllDays = DAYS;
AllWorkDays = DAYS.slice(0, 5);
AllWeekend = DAYS.slice(5, 7);
AllDaysR = DAYS.reverse();
AllWorkDaysR = DAYS.slice(0, 5).reverse();
AllWeekendR = DAYS.slice(5, 7).reverse();

document.getElementById("Text1B").innerHTML = AllDays;
document.getElementById("Text2B").innerHTML = AllWorkDays;
document.getElementById("Text3B").innerHTML = AllWeekend;
document.getElementById("Text4B").innerHTML = AllDaysR;
document.getElementById("Text5B").innerHTML = AllWorkDaysR;
document.getElementById("Text6B").innerHTML = AllWeekendR;

AantalNamen=prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");
document.getElementById("TestText").innerHTML = AantalNamen.split(" ");
document.getElementById("TestText2").innerHTML = AantalNamen.split(" ").reverse();

const arrayEen = [1,2,3,4,5,6,7,8,9,10];
const arrayTwee = [2,4,6,8,10,12,14,16,18,20];
const NUMBERLIST = [];
var NUMBERLIST_TEXT = NUMBERLIST;

function math1(){
    Position1 = 0
    Position2 = 0
    // This needs to go into a 10x For Loop //
    for (let i = 0; i < 10; i++) {
        Math = arrayEen[Position1] + arrayTwee[Position2]
        NUMBERLIST.push(Math)
        Position1 = Position1 + 1
        Position2 = Position2 + 1
    }
};
math1();
document.getElementById("MathText1").innerHTML = NUMBERLIST_TEXT;

const ListNum1 = [2,4,6,8];
const ListNum2 = [1,2,3,4,5,6,7,8,9,10];
const NUMBERLIST2 = [];
var NUMBERLIST_TEXT2 = NUMBERLIST2;
function math2(){
    PositionB1=0
    PositionB2=0
    for (let i = 0; i < 4; i++) {
        for (let i = 0; i < 10; i++) {
            Math2 = ListNum1[PositionB1] * ListNum2[PositionB2]
            NUMBERLIST2.push(Math2)
            PositionB2 = PositionB2 + 1};
        PositionB1 = PositionB1 + 1
        PositionB2 = 0
    };
};
math2();
document.getElementById("MathText2").innerHTML = NUMBERLIST_TEXT2;

const Piramid2=[];
function Piramid(){
    PiramidNumber=prompt("Give a number");
    PiramidNumber2=parseInt(PiramidNumber)
    funnynumber=0
    for (let i = 0; i < PiramidNumber2; i++){
        funnynumber=funnynumber+1
        Piramid2.push(funnynumber)};
    }
    Piramid();
    document.getElementById("PiramidText").innerHTML = "test"
document.getElementById("PiramidText").innerHTML = Piramid2;
document.getElementById("PiramidText2").innerHTML = Piramid2.reverse();