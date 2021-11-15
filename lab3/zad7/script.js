async function getA() {
    var res = await fetch("http://localhost:3000/cities");
    var json = await res.json();

    var filtered = json.filter(function (entry) {
        return entry.province === "małopolskie";
    });

    var cities = ""

    for (var prop in filtered) {
        if (!filtered.hasOwnProperty(prop)) {
            continue;
        }
        cities += filtered[prop].name + ", "
    }
    cities = cities.substr(0, cities.length - 2);
    cities = cities + "."
    document.getElementById("a-answer").textContent = cities;


}

async function getB() {
    var res = await fetch("http://localhost:3000/cities?name_like=.*(A|a).*a.*");
    var json = await res.json();

    var cities = ""
    for (var prop in json) {
        if (!json.hasOwnProperty(prop)) {
            continue;
        }
        cities += json[prop].name + ", "
    }
    cities = cities.substr(0, cities.length - 2);
    cities = cities + "."

    document.getElementById("b-answer").textContent = cities;


}

async function getC() {
    var res = await fetch("http://localhost:3000/cities?_sort=dentensity&_order=desc&_limit=5");
    var json = await res.json();
    var city = json[4].name + '.';
    document.getElementById("c-answer").textContent = city;

}

async function getD() {
    var res = await fetch("http://localhost:3000/cities");
    var json = await res.json();

    var filtered = json.filter(function (entry) {
        return entry.people > 100000;
    });
    var cities = ""
    for (var prop in filtered) {
        if (!filtered.hasOwnProperty(prop)) {
            continue;
        }
        cities += filtered[prop].name + " city, ";
    }
    cities = cities.substr(0, cities.length - 2) + "."

    document.getElementById("d-answer").textContent = cities;
    // var res = fetch("http://localhost:3000/cities",{
    //     method: 'PATCH',
    //     headers:{
    //     'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify(DATA_WHICH_WE_WANT_TO_SEND)
    // })
}

async function getE() {
    var res1 = await fetch("http://localhost:3000/cities?people_gte=80000");
    var json1 = await res1.json();

    var res2 = await fetch("http://localhost:3000/cities?people_lte=80000");
    var json2 = await res2.json();

    document.getElementById("e-answer1").textContent = "Miast powyżej 80000 mieszkańców jest: " + json1.length;
    document.getElementById("e-answer2").textContent = "Miast poniżej 80000 mieszkańców jest: " + json2.length;
    if (json1.length > json2.length) {
        document.getElementById("e-answer3").textContent = "Zatem: więcej jest miast powyżej 80k mieszkańców.";
    } else {
        document.getElementById("e-answer3").textContent = "Zatem: więcej jest miast poniżej 80k mieszkańców.";
    }

}

async function getF() {
    var res = await fetch("http://localhost:3000/cities?township_like=P*");
    var json = await res.json();

    var area_sum = 0;
    json.forEach(element => {
        area_sum += element.area;
    });

    document.getElementById("f-answer").textContent = area_sum / json.length;

}

async function loadSite() {
    getA();
    getB();
    getC();
    getD();
    getE();
    getF();
}

loadSite();