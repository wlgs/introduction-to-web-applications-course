document.getElementById("btn").onclick = function(){
    var imie = prompt("Twoje imie:");
    var last;
    var mr;
    if (imie[imie.length-1]=='a'){
        imie= imie.substring(0, imie.length - 1);
        last = 'e';
        mr = 'ią '
    }
    else
    {
        last = 'a';
        mr = 'a '
    }
    greetingContent = 'Witam pan' + mr + imie + last;
    document.getElementById("greeting").textContent = greetingContent;
};