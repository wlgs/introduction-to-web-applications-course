document.getElementById("btn1").onclick = function(){
    document.getElementById("hide").style.visibility="visible";
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "visible";
};

document.getElementById("btn2").onclick = function(){
    document.getElementById("hide").style.visibility="hidden";
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn2").style.visibility = "hidden";

};