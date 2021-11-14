var formData = new FormData(document.querySelector('form'))


function isValid(){
    return document.getElementById("name").checkValidity() && document.getElementById("phone").checkValidity()
}


document.getElementById("add").onclick = function(){

    // build new entry

    var formData = new FormData(document.querySelector('form'))
    if(!isValid())
        return
    var name = formData.get("name");
    var phone = formData.get("phone");

    var section = document.createElement("section");


    var section_left = document.createElement('div');
    section_left.classList.add('section-left');

    var section_left_h3 = document.createElement('h3');
    section_left_h3.textContent=name;
    var section_left_p = document.createElement('p');
    section_left_p.textContent=phone;
    section_left.appendChild(section_left_h3);
    section_left.appendChild(section_left_p);

    section.appendChild(section_left);

    var section_right = document.createElement('div');
    section_right.classList.add("section-right");
    section_right.textContent="🗑️"

    section_right.addEventListener('click', deleteEntry);
    section.appendChild(section_right);

    document.getElementById("entries").appendChild(section);
}

function deleteEntry(){
    var parent = document.getElementById("entries");
    var index = Array.from(parent.children).indexOf(this.parentNode);
    parent.removeChild(parent.children[index]);
}