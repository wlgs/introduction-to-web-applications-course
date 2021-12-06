async function getData() {
    var res = await fetch("http://localhost:3000/cities");
    var json = await res.json();
    return json;
}

async function getA(data) {
    var json = data;

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

function checkDoubleA(word) {
    var cnt = 0;
    for (var i = 0; i < word.length; i++) {
        letter = word.charAt(i)
        if (letter == 'A' || letter == 'a')
            cnt++;
        if (cnt == 2)
            break;
    }
    return cnt == 2
}

async function getB(data) {
    var json = data

    var filtered = json.filter(function (entry) {
        return checkDoubleA(entry.name);
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
    document.getElementById("b-answer").textContent = cities;


}

async function getC(data) {
    var json = data;
    var citiesArray = new Array;
    for (var prop in json) {
        citiesArray.push([json[prop].name, json[prop].people / json[prop].area]);
    }
    citiesArray.sort(function (a, b) {
        if (a[1] < b[1])
            return 1
        else if (a[1] > b[1])
            return -1
        return 0
    });
    document.getElementById("c-answer").textContent = citiesArray[4][0];

}

async function getD(data) {
    var json = data;

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
}

async function getE(data) {
    var json = data;
    var cntMore = 0;
    var cntLess = 0;
    for (var prop in json) {
        if (json[prop].people > 80000)
            cntMore++;
        else
            cntLess++;
    }
    document.getElementById("e-answer1").textContent = "Miast powyżej 80000 mieszkańców jest: " + cntMore;
    document.getElementById("e-answer2").textContent = "Miast poniżej 80000 mieszkańców jest: " + cntLess;
    if (cntMore > cntLess) {
        document.getElementById("e-answer3").textContent = "Zatem: więcej jest miast powyżej 80k mieszkańców.";
    } else {
        document.getElementById("e-answer3").textContent = "Zatem: więcej jest miast poniżej 80k mieszkańców.";
    }

}

async function getF(data) {
    var json = data;
    var area_sum = 0;

    var citiesP = new Array;
    for (var prop in json) {
        if (json[prop].township.charAt(0) == 'P')
            citiesP.push([json[prop].area, json[prop].township]);
    }
    console.log(citiesP);
    citiesPstr = ""
    citiesP.forEach(element => {
        area_sum += element[0];
        citiesPstr += element[1] + ", "
    });
    citiesPstr = citiesPstr.substr(0, citiesPstr.length - 2) + "."
    document.getElementById("f-answer").textContent = area_sum / citiesP.length;
    document.getElementById("f-answer2").textContent = "Są to powiaty (zaczynające się na dużą literę P): " + citiesPstr

}

async function loadSite() {
    var json = await getData();
    getA(json);
    getB(json);
    getC(json);
    getD(json);
    getE(json);
    getF(json);
}

loadSite();