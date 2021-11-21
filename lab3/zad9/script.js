async function getJson(){
    var res = await fetch("pracownicy.json");
    var json = await res.json();
    return json;
}

function loadSlide(id, data){
    var elName = document.querySelector("#name");
    var elPos = document.querySelector("#position");
    var elDesc = document.querySelector("#info");
    var elImg = document.querySelector("#photo");

    var name = data[id].name;
    var pos = data[id].position;
    var desc = data[id].description;
    var img = data[id].img;

    elName.textContent = name;
    elPos.textContent = pos;
    elDesc.textContent = desc;
    elImg.srcset = "img/" + img;


}
var data;
var id = 0;

async function loadSite(){
    var data = await getJson();
    data = data.pracownicy;
    loadSlide(0,data);
    document.querySelector("#left").addEventListener('click', function(event) {
        id--;
        loadSlide(id%data.length, data);
    } )
    
    document.querySelector("#right").addEventListener('click', function(event) {
        id++;
        loadSlide(id%data.length, data);
    } )

    document.querySelector("#random").addEventListener('click', function(event) {
        id = Math.round(Math.random()*data.length);
        document.querySelector("#rolled").textContent="Psst! Wylosowałeś " + (id%data.length+1);
        loadSlide(id%data.length,data);
    })
}

loadSite();

