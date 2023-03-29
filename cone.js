console.log("This is running.")

var Order = {
    "Aardbei": 0,
    "Chocolade": 0,
    "Vanilla": 0,
    "Horn": 0,
    "Bakje": 0
};

var BollenAsk = prompt("Hoeveel bollen ijs wil je?");
var Bollen = parseInt(BollenAsk)

document.getElementById("BollenText").innerHTML = Bollen;

function SmaakFunction(){
    console.log("SmaakFunction is running.")
    for (let i = 0; i < Bollen; i++){
        SmaakAsk = prompt("Welke Smaak (A/C/V)")
        if (SmaakAsk == "A" || SmaakAsk == "a") {
            Order["Aardbei"] = Order["Aardbei"] + 1
        }
        if (SmaakAsk == "C" || SmaakAsk == "c") {
            Order["Chocolade"] = Order["Chocolade"] + 1
        }
        if (SmaakAsk == "V" || SmaakAsk == "v") {
            Order["Vanilla"] = Order["Vanilla"] + 1
        }
    }
};

function HornFunction(){
    console.log("HornFunction is running.")
    for (let i = 0; i < Bollen; i++){
        HornAsk = prompt("Horn of Bakje? (H/B)")
        if (HornAsk == "B" || HornAsk == "b") {
            Order["Horn"] = Order["Horn"] + 1
        }
        if (HornAsk == "H" || HornAsk == "h") {
            Order["Bakje"] = Order["Bakje"] + 1
        }
    }
};

SmaakFunction();
HornFunction();

Prijs = (Order["Aardbei"] * 1) + (Order["Chocolade"] * 1) + (Order["Vanilla"] * 0.75) + (Order["Horn"] * 0.25) + (Order["Bakje"] * 0.5)

document.getElementById("OrderText").innerHTML = "It didn't work.";
console.log(Order)
OrderText ="Aardbei: "+Order["Aardbei"]+" Chocolade: "+Order["Chocolade"]+" Vanilla: "+Order["Vanilla"]+". "+"Horntje(s): "+Order["Horn"]+" Bakje(s): "+Order["Bakje"];
document.getElementById("OrderText").innerHTML = OrderText;
document.getElementById("PrijsText").innerHTML = ("Uw prijs is: " + Prijs + "$");