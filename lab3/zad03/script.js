document.getElementById("add").onclick = function() {
    var cnt = document.getElementById("list").childElementCount +1;

    var el = document.createElement("li");
    var textNode = document.createTextNode("Item-" + cnt);
    el.appendChild(textNode);
    document.getElementById("list").appendChild(el);
}



document.getElementById("delete").onclick = function() {
    var toRemove = document.getElementById("list");
    console.log(toRemove.childNodes[0])
    toRemove.removeChild(toRemove.childNodes[0]);
}