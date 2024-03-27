

// function TextPage() {
//     var textZone = document.querySelector('.Text_Zone');
//     textZone.style.display = "inline";
//     var drawZone = document.querySelector('.Draw_Zone');
//     drawZone.style.display = "none";

//     var textButton = document.getElementById("TextButton");
//     var drawButton = document.getElementById("DrawButton");
    
//     textButton.disabled = true;
//     drawButton.disabled = false;
// }

// function DrawPage() {
//     var textZone = document.querySelector('.Text_Zone');
//     textZone.style.display = "none";
//     var drawZone = document.querySelector('.Draw_Zone');
//     drawZone.style.display = "inline";

//     var textButton = document.getElementById("TextButton");
//     var drawButton = document.getElementById("DrawButton");
    
//     textButton.disabled = false;
//     drawButton.disabled = true;
// }
function TextPage()
{
    var element = document.querySelector('.Text_Zone');
    element.style.display = "inline";
    var element2 = document.querySelector('.Draw_Zone');
    element2.style.display = "none";

    var Tbotton = document.getElementById("Texticon");
    var Dbotton = document.getElementById("Drawicon");
    
    Tbotton.src = "act/Tact.png";
    Dbotton.src = "non/D.png";

    }
function DrawPage()
{
    var element = document.querySelector('.Text_Zone');
    element.style.display = "none";
    var element2 = document.querySelector('.Draw_Zone');
    element2.style.display = "inline";


    var Tbotton = document.getElementById("Texticon");
    var Dbotton = document.getElementById("Drawicon");
    Tbotton.src = "non/T.png";
    Dbotton.src = "act/Dact.png";
    }

    