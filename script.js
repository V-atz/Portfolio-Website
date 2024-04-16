var itemNames = document.getElementsByClassName("items");
var itemDescp = document.getElementsByClassName("itemContent");

function openItem(nameOfItem){
    for(i of itemNames){
        i.classList.remove("active");
    }
    for(j of itemDescp){
        j.classList.remove("activeItem");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(nameOfItem).classList.add("activeItem");
}

