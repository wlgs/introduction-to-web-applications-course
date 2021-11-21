var previewArray = new Array;


async function getData(){
    var data = new Array;

    var res1 = await fetch("json/produktyA.json")
    data.push(await res1.json())

    var res2 = await fetch("json/produktyB.json")
    data.push(await res2.json())

    var res3 = await fetch("json/produktyC.json")
    data.push(await res3.json())

    var dict = {};

    for(var i = 0; i<3; i++){
        json = data[i];
        for (var key in json){
            if (dict[key] == undefined)
                dict[key] = new Array;
            for (var el in json[key]){
                if (!dict[key].includes(json[key][el]))
                    dict[key].push(json[key][el]);
            }
        }
    }
    return dict;
}

function clickHandler(){
    showhideList(this.id);
}

function categoryIndeterminate(categoryName){
    var checkboxes = document.querySelectorAll("#ucategory_" + categoryName + ">div>input");
    var category = document.querySelector("#category_main_" + categoryName );
    var cnt = checkboxes.length;
    var cnt2 = 0;
    for (var checkbox of checkboxes){
        if(checkbox.checked)
            cnt2++;
        
    }
    if (cnt==cnt2){
        category.checked = true;
        category.indeterminate = false;
    }
    else if (cnt2>0 && cnt2<cnt){
        category.indeterminate = true;
    }
    else if (cnt2==0){
        category.indeterminate = false;
        category.checked = false;
    }

}

function checkboxHandlerWhole(){
    var categoryID = this.id.split("_")[2];
    var checkboxes = document.querySelectorAll("#ucategory_" + categoryID + ">div>input");
    if (this.checked){
        for (var box of checkboxes){
            if (box.checked)
                continue
            else{
                box.checked = true;
                var item = box.id.split("_")[1];
                previewArray.push(item)
            }
        }
    }
    if (!this.checked){
        for (var box of checkboxes){
            if (!box.checked)
                continue
            else{
                box.checked = false;
                var item = box.id.split("_")[1];
                const index = previewArray.indexOf(item);
                if (index > -1)
                    previewArray.splice(index, 1);
            }
        }
    }
    updatePreview();
}

function checkboxHandler(){
    var item = this.id.split("_")[1];
    var categoryName = this.id.split("_")[0];
    categoryIndeterminate(categoryName);
    if (item=="main"){
        document.querySelectorAll("#" + this.id.split("_")[2])

    }
    if (this.checked){
        previewArray.push(item);
    }
    else{
        const index = previewArray.indexOf(item);
        if (index > -1)
            previewArray.splice(index, 1);
    }
    updatePreview();
}

function updatePreview(){
    var preview = document.getElementById("preview_items");
    preview.textContent = "";
    previewArray.forEach(element => {
        preview.textContent += element + ', '
    });
    preview.textContent = preview.textContent.substr(0,preview.textContent.length-2);
}

async function loadSite(){
    data = await getData();
    Object.keys(data).forEach(function(key) {
        buildCategory(data[key], key);
    });
    hideUCategories();

    var arrows = document.getElementsByClassName("hoverable");
    for (let arrow of arrows)
        arrow.addEventListener("click", clickHandler);
    
    var checkboxesSingle = document.querySelectorAll("input[type='checkbox'].singleItem");
    for (let checkbox of checkboxesSingle)
        checkbox.addEventListener('change',checkboxHandler);

    var checkboxesWhole = document.querySelectorAll("input[type='checkbox'].wholeCategory");
    for (let checkbox of checkboxesWhole)
        checkbox.addEventListener('change',checkboxHandlerWhole);

}



function buildCategory(array, name){
    var category = document.createElement('div');
    category.classList.add('category');

    var div1 = document.createElement('div');
    var category_show = document.createElement('span');
    category_show.classList.add('hoverable');
    category_show.textContent = "❯";
    category_show.setAttribute("id", "category_show_" + name);

    var input1 = document.createElement('input');
    input1.setAttribute("type", "checkbox");
    input1.setAttribute("id", "category_main_" + name);
    input1.classList.add("wholeCategory")

    var category_name = document.createElement('span');
    category_name.textContent = name;

    div1.appendChild(category_show);
    div1.appendChild(input1);
    div1.appendChild(category_name);


    var div2 = document.createElement('div');
    div2.classList.add("ucategory");
    div2.setAttribute("id", "ucategory" + "_" + name);

    array.forEach(element => {
        var div3 = document.createElement('div');
        var input2 = document.createElement('input');
        input2.setAttribute("type", "checkbox");
        input2.setAttribute("id",name+"_"+element)
        input2.classList.add("singleItem")

        var item_name = document.createElement('span');
        item_name.textContent = element;

        div3.appendChild(input2);
        div3.appendChild(item_name);
        div2.appendChild(div3);
    });
    category.appendChild(div1);
    category.appendChild(div2);

    document.querySelector("#left").appendChild(category);


}
function hideUCategories(){
    var ucategories = document.getElementsByClassName("ucategory");
    for (let el of ucategories) {
        el.classList.add("hidden");
    }
}

function showhideList(id){
    var id_name = id.substr(14,id.length)
    var ucategory = document.getElementById("ucategory_" + id_name);
    var arrow = document.getElementById("category_show_" + id_name);
    if(ucategory.classList.contains("hidden"))
    {
        ucategory.classList.remove("hidden");
        arrow.classList.add("rotated");
        return
    }
    if (!ucategory.classList.contains("hidden")){
        ucategory.classList.add("hidden");
        arrow.classList.remove("rotated");
        return
    }

}

loadSite();


