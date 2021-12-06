var points = 0;
var clicked = false;
var propagation = true;

var blue_clicked = false;
var red_clicked = false;
var yellow_clicked = false;

function clearInfo(){
    document.getElementById("info1").textContent = "-";
    document.getElementById("info2").textContent = "-";
    document.getElementById("info3").textContent = "-";
}

function resetbuttons(){
    blue_clicked = false;
    red_clicked = false;
    yellow_clicked = false;
}

function displayInfo(){
    document.querySelector("#info1").textContent= "-"
    document.querySelector("#info2").textContent= "-"
    document.querySelector("#info3").textContent= "-"
    if (blue_clicked)
        document.querySelector("#info1").textContent= "Nacisnąłeś niebieski o wartości 1"
    if (red_clicked)
        document.querySelector("#info2").textContent= "Nacisnąłeś czerwony o wartości 2"
    if (yellow_clicked)
        document.querySelector("#info3").textContent= "Nacisnąłeś żółty o wartości 5"
}

function changePoints(points){
    var el = document.getElementById("points");
    el.textContent = points;
    this.points = points
}

function yellowClick(){
    if (points>50 || document.getElementById("innerest-box").classList.contains("disabled"))
        return;
    changePoints(points + 5);
    yellow_clicked = true;
    if (!propagation){
        displayInfo();
        resetbuttons();
    }
}


function redClick(){
    if (points>30 || document.getElementById("inner-box").classList.contains("disabled"))
        return;
    red_clicked = true;
    if (!propagation){
        displayInfo();
        resetbuttons();
    }
        
    changePoints(points + 2);
}

function blueClick(){
    if (document.getElementById("outer-box").classList.contains("disabled"))
        return;
    changePoints(points + 1);
    blue_clicked = true;
    displayInfo();
    resetbuttons();
}
function clickHandler(id){
    if(!clicked){
        switch(id){
            case "outer-box":
                blueClick();
                break;
            case "inner-box":
                redClick();
                break;
            case "innerest-box":
                yellowClick();
                break;
        }

        if(points>30){
            document.getElementById("inner-box").classList.add("disabled");
        }
        if(points>50){
            document.getElementById("innerest-box").classList.add("disabled");
        }


    }
    if (!propagation)
        clicked = true;
}

function clickHandlerReset(){
    clicked = false;
}

function reset(){
    points = 0;
    changePoints(points);
    clicked = false;
    document.getElementById("inner-box").classList.remove("disabled");
    document.getElementById("innerest-box").classList.remove("disabled");
    clearInfo();
    resetbuttons();
    document.querySelector("#info1").textContent= "Właśnie zresetowałeś"
    document.querySelector("#info2").textContent= "-"
    document.querySelector("#info3").textContent= "-"
}

function propagationHandler(){
    if (this.classList.contains("cur-stop")){
        propagation = false;
        this.classList.remove("cur-stop");
        this.classList.add("cur-start");
        this.textContent="Start Propagation";
    }
    else if (this.classList.contains("cur-start")){
        propagation = true;
        this.classList.remove("cur-start");
        this.classList.add("cur-stop");
        this.textContent="Stop Propagation";
    }
    return
}

document.getElementById("innerest-box").onclick = function() {
    clickHandler(this.id);
}

document.getElementById("inner-box").onclick = function() {
    clickHandler(this.id);
}

document.getElementById("outer-box").onclick = function() {
    console.log("2");
    clickHandler(this.id);
    clickHandlerReset();   
}

document.getElementById("reset").onclick = reset;


document.getElementById("propagation").onclick = propagationHandler;