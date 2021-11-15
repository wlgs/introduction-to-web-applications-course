var bloon = document.getElementById("bloon");
var popup = document.getElementById("menu")
var curSize = bloon.style.fontSize="100%";
var exploded = false;
document.addEventListener('keydown', (e) => {
    var curSize = bloon.style.fontSize;
    var curSizeInt = parseInt(curSize);
    

    if (exploded)
        return
    if (e.repeat && e.key=="ArrowDown"){
        if (curSizeInt <= 50)
            return
        nextSizeInt = curSizeInt - 10;
        nextSize = nextSizeInt + "%";
        bloon.style.fontSize = nextSize;
    }
    else if (e.repeat && e.key=="ArrowUp"){
        if (curSizeInt >= 2000){
            bloon.textContent="💥"
            exploded=true;
            return
        }
        nextSizeInt = curSizeInt + 10;
        nextSize = nextSizeInt + "%";
        bloon.style.fontSize = nextSize;
    }
  });


// context-menu

bloon.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    if (!e.ctrlKey)
        return
    popup.style.top = e.clientY + 'px';
    popup.style.left = e.clientX + 'px';
    var curSize = bloon.style.fontSize;
    var curSizeInt = parseInt(curSize);
    popup.textContent="Aktualny rozmiar: " + curSizeInt + "%" + ", do wybuchu " + (2000-curSizeInt) + "%"
    popup.style.visibility = "visible";
    return false;
}, false);

document.addEventListener('click', function(){
    popup.style.visibility = "hidden";
})