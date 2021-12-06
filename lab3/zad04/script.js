var counter = 0;

function increment(){
    var counterEl = document.getElementById("counter");
    if(counterEl.classList.contains("disabled"))
        return;
    counter++;
    counterEl.textContent="Licznik: " + counter;
}

function disableCounter(){
    document.getElementById("counter").classList.add("disabled")
    counter = 0;

    var counterEl = document.getElementById("counter");
    counterEl.textContent="Licznik: " + counter;
}

function enableCounter(){
    var counterEl = document.getElementById("counter");
    if(!counterEl.classList.contains("disabled"))
        return;
    document.getElementById("counter").classList.remove("disabled")
}

document.getElementById("add").onclick = increment;
document.getElementById("disable").onclick = disableCounter;
document.getElementById("enable").onclick = enableCounter;

