var points = 0;
var clicked = false;


function displayInfo(info){
    var el = document.getElementById("info");
    el.textContent=info;
}

function changePoints(points){
    var el = document.getElementById("points");
    el.textContent = points;
    this.points = points
}

function yellowClick(){
    if (points>50 || document.getElementById("innerest-box").classList.contains("disabled"))
        return;
    displayInfo("Nacisnąłeś żółty o wartości 5");
    changePoints(points + 5);
}

function blueClick(){
    if (document.getElementById("outer-box").classList.contains("disabled"))
        return;
    displayInfo("Nacisnąłeś niebieski o wartości 1");
    changePoints(points + 1);
}

function redClick(){
    if (points>30 || document.getElementById("inner-box").classList.contains("disabled"))
        return;
    displayInfo("Nacisnąłeś czerwony o wartości 2");
    changePoints(points + 2);
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
    displayInfo("Wlasnie zresetowales.");
}


function propagationHandler(){
    if (this.classList.contains("cur-stop")){
        this.classList.remove("cur-stop");
        this.classList.add("cur-start");
        document.getElementById("outer-box").classList.add("disabled");
        document.getElementById("inner-box").classList.add("disabled");
        document.getElementById("innerest-box").classList.add("disabled");
        this.textContent="Start Propagation";
    }
    else if (this.classList.contains("cur-start")){
        this.classList.remove("cur-start");
        this.classList.add("cur-stop");
        this.textContent="Stop Propagation";
        document.getElementById("outer-box").classList.remove("disabled");
        if (points <=30)
            document.getElementById("inner-box").classList.remove("disabled");
        if (points <=50)
            document.getElementById("innerest-box").classList.remove("disabled");
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
    clickHandler(this.id);
    clickHandlerReset();   
}

document.getElementById("reset").onclick = reset;


document.getElementById("propagation").onclick = propagationHandler;