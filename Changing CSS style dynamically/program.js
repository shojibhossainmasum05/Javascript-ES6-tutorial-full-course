var myVar = document.querySelector("#butId");

function BuyNow() {
    myVar.innerHTML="Do you really want to buy it?";
    myVar.classList.add("style-id");
}

function BuyNow2() {
    myVar.innerHTML="";
    myVar.classList.remove("style-id");
}